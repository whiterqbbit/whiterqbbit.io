export default defineEventHandler(async () => {
  const gitlabData = await fetch('https://gitlab.com/users/whiterqbbit/calendar.json', {
    headers: {
      Accept: 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => Object.entries(data).map(([key, value]) => ({ date: key, count: value })))

  const githubResponse = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${useRuntimeConfig().GITHUB_PERSONAL_KEY}`,
    },
    body: JSON.stringify({
      query: `query {
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
              }`,
    }),
  }).then(response => response.json())

  const githubData = githubResponse.data.user.contributionsCollection.contributionCalendar.weeks
    .flatMap((week: any) => week.contributionDays)
    .map((day: any) => ({ date: day.date, count: day.contributionCount }))

  // Merge GitHub and GitLab data
  const mergedData = [...gitlabData, ...githubData]
    .reduce((acc: any, { date, count }: { date: string, count: number }) => {
      acc[date] = (acc[date] || 0) + count
      return acc
    }, {})

  interface Contribution {
    date: string
    count: number
  }

  // Convert merged data back to array format and sort by date
  let mergedDataArray: Contribution[] = Object.entries(mergedData).map(([date, count]): Contribution => ({ date, count: count as number }))
  mergedDataArray = mergedDataArray.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  // Find the index where the date exceeds one year from the start
  const oneYearFromStart = new Date(mergedDataArray[0].date)
  oneYearFromStart.setFullYear(oneYearFromStart.getFullYear() + 1)

  const endIndex = mergedDataArray.findIndex(({ date }) => new Date(date) >= oneYearFromStart)

  // If endIndex is -1, it means all dates are within one year
  // Otherwise, slice the array to keep only dates within one year
  if (endIndex !== -1)
    mergedDataArray = mergedDataArray.slice(0, endIndex)

  const totalContributionCount = mergedDataArray.reduce((acc, { count }) => acc + count, 0)
  const totalWorkedDayCount = mergedDataArray.filter(({ count }) => count > 0).length
  const averageContributionsPerDay = (totalContributionCount / totalWorkedDayCount).toFixed(2)

  const stats = {
    totalContributionCount,
    totalWorkedDayCount,
    averageContributionsPerDay,
  }

  return {
    contributions: mergedDataArray,
    stats,
  }
})
