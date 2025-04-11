interface Contribution {
  date: string
  count: number
}

interface Stats {
  totalContributionCount: number
  totalWorkedDayCount: number
  averageContributionsPerDay: string
}

export default defineEventHandler(async (): Promise<{ contributions: Contribution[], stats: Stats }> => {
  const gitlabData = await fetchGitLabData()
  const githubData = await fetchGitHubData([
    { username: 'whiterqbbit', key: useRuntimeConfig().GITHUB_WHITERQBBIT_KEY },
    { username: 'guillaume-bonnefoy', key: useRuntimeConfig().GITHUB_BONNEFOY_KEY }
  ])
  
  const mergedData = mergeAndProcessData(gitlabData, githubData)
  const filteredData = filterDataByYear(mergedData)
  const stats = calculateStats(filteredData)

  return {
    contributions: filteredData,
    stats,
  }
})

async function fetchGitLabData(): Promise<Contribution[]> {
  const response = await fetch('https://gitlab.com/users/whiterqbbit/calendar.json', {
    headers: { Accept: 'application/json' },
  })
  const data: Record<string, number> = await response.json()
  return Object.entries(data).map(([date, count]) => ({ date, count }))
}

interface GitHubAccount {
  username: string
  key: string
}

async function fetchGitHubData(accounts: GitHubAccount[]): Promise<Contribution[]> {
  interface GitHubWeek {
    contributionDays: {
      date: string
      contributionCount: number
    }[]
  }

  let allContributions: Contribution[] = []

  for (const account of accounts) {
    const query = `query {
      user(login: "${account.username}"){
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }`

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${account.key}`,
      },
      body: JSON.stringify({ query }),
    })
    
    const { data } = await response.json()

    if (data?.user?.contributionsCollection?.contributionCalendar?.weeks) {
      const accountContributions = data.user.contributionsCollection.contributionCalendar.weeks
        .flatMap((week: GitHubWeek) => week.contributionDays)
        .map((day: { date: string, contributionCount: number }) => ({ 
          date: day.date, 
          count: day.contributionCount 
        }))
      
      allContributions = [...allContributions, ...accountContributions]
    }
  }

  return allContributions
}

function mergeAndProcessData(gitlabData: Contribution[], githubData: Contribution[]): Record<string, number> {
  return [...gitlabData, ...githubData].reduce((acc, { date, count }) => {
    acc[date] = (acc[date] || 0) + count
    return acc
  }, {} as Record<string, number>)
}

function filterDataByYear(data: Record<string, number>): Contribution[] {
  const dataArray: Contribution[] = Object.entries(data).map(([date, count]) => ({ date, count }))
  dataArray.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  const firstFullWeekStartIndex = dataArray.findIndex(({ date }) => new Date(date).getDay() === 1) // 1 for Monday, 0 for Sunday
  const startDate = new Date(dataArray[firstFullWeekStartIndex].date)

  const oneYearFromStart = new Date(startDate)
  oneYearFromStart.setFullYear(oneYearFromStart.getFullYear() + 1)

  const dayOfWeek = oneYearFromStart.getDay()
  const endOfWeekDate = new Date(oneYearFromStart)
  endOfWeekDate.setDate(oneYearFromStart.getDate() + (7 - dayOfWeek))

  const endIndex = dataArray.findIndex(({ date }) => new Date(date) > endOfWeekDate)
  return endIndex === -1 ? dataArray.slice(firstFullWeekStartIndex) : dataArray.slice(firstFullWeekStartIndex, endIndex)
}

function calculateStats(data: Contribution[]): Stats {
  const totalContributionCount = data.reduce((acc, { count }) => acc + count, 0)
  const totalWorkedDayCount = data.filter(({ count }) => count > 0).length
  const averageContributionsPerDay = (totalContributionCount / totalWorkedDayCount).toFixed(2)

  return {
    totalContributionCount,
    totalWorkedDayCount,
    averageContributionsPerDay,
  }
}
