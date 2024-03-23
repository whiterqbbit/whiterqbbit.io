export default defineEventHandler(async () => {
  // Fetch GitLab data
  const gitlabData = await fetch('https://gitlab.com/users/whiterqbbit/calendar.json', {
    headers: {
      Accept: 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => Object.entries(data).map(([key, value]) => ({ date: key, count: value })))

  // Fetch GitHub data
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

  // Flatten GitHub data
  const githubData = githubResponse.data.user.contributionsCollection.contributionCalendar.weeks
    .flatMap((week: any) => week.contributionDays)
    .map((day: any) => ({ date: day.date, count: day.contributionCount }))

  // Merge GitHub and GitLab data
  const mergedData = [...gitlabData, ...githubData]
    .reduce((acc: any, { date, count }: { date: string, count: number }) => {
      acc[date] = (acc[date] || 0) + count
      return acc
    }, {})

  // Convert merged data back to array format
  const mergedDataArray = Object.entries(mergedData).map(([date, count]) => ({ date, count }))

  return mergedDataArray
})
