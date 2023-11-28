import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
  ],
  theme: {
    colors: {
      mocha: {
        black: '#1B1B29',
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
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: 'bunny',
      fonts: { sans: 'Nunito' },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
