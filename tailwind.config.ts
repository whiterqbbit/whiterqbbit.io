import type { Config } from 'tailwindcss'
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'
import catppuccin from '@catppuccin/tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: { fontFamily: { museo: ['Museo', 'sans-serif'] } },
  },
  darkMode: 'class',
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['ci', 'heroicons', 'simple-icons']),
    }),
    catppuccin({
      prefix: 'ctp',
    }),
  ],
}
