import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        mocha: {
          black: '#1B1B29',
          grey: {
            700: '#1D1D2C',
            500: '#2B2B3B', // pas vrai cat
          },
          blue: '#89B4FA',
          red: '#F38BA8',
          green: '#A6E3A1',
          teal: '#89DCEB',
          white: '#F2CDCD',
          pink: '#F5C2E7',
          orange: '#FAB387',
          yellow: '#F9E2AF',
        },
      },
    },
  },
}

// desired font
// provider: 'bunny',
// fonts: { sans: 'Nunito' },
