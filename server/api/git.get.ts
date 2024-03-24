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
  const githubData = await fetchGitHubData()

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

async function fetchGitHubData(): Promise<Contribution[]> {
  interface GitHubWeek {
    contributionDays: {
      date: string
      contributionCount: number
    }[]
  }

  const query = `query {
    user(login: "whiterqbbit"){
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
      'Authorization': `Bearer ${useRuntimeConfig().GITHUB_PERSONAL_KEY}`,
    },
    body: JSON.stringify({ query }),
  })
  const { data } = await response.json()
  return data.user.contributionsCollection.contributionCalendar.weeks
    .flatMap((week: GitHubWeek) => week.contributionDays)
    .map((day: { date: string, contributionCount: number }) => ({ date: day.date, count: day.contributionCount }))
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

  const oneYearFromStart = new Date(dataArray[0].date)
  oneYearFromStart.setFullYear(oneYearFromStart.getFullYear() + 1)

  const endIndex = dataArray.findIndex(({ date }) => new Date(date) >= oneYearFromStart)
  return endIndex === -1 ? dataArray : dataArray.slice(0, endIndex)
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
