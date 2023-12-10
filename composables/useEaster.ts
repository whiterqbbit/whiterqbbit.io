export function useEaster() {
  useToast().add({
    title: 'wot',
    timeout: 500,
    closeButton: { icon: 'i-ci-help' },
    icon: 'i-ci-help',
    click: second_easter,
  })
  umTrackEvent('easter_egg_1')

  function second_easter() {
    useToast().add({
      title: '🐇',
      timeout: 1000,
      closeButton: { icon: 'none' },
      icon: 'i-simple-icons-4chan',
      actions: [{
        label: '💊',
        size: 'xl',
        click: () => third_easter(),
      }, {
        label: '🐑',
        size: 'xl',
        click: () => fourth_easter(),
      }],
    })
    umTrackEvent('easter_egg_2')
  }

  async function third_easter() {
    await navigateTo('https://www.youtube.com/watch?v=tp0KJ-fR6Ik', { external: true, open: { target: '_blank' } })
    umTrackEvent('easter_egg_3_pill')
  }

  function fourth_easter() {
    navigateTo('https://www.youtube.com/watch?v=ZZ5LpwO-An4', { external: true, open: { target: '_blank' } })
    umTrackEvent('easter_egg_3_sheep')
  }
}
