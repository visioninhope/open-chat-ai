import { nextui } from '@nextui-org/react'

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'printer-text': {
          '0%': { width: '0' },
          '80%': { width: '100%' },
          '90%': { width: '100%' },
          '100%': {
            width: '100%',
            'text-overflow': 'ellipsis',
          },
        },
        'box-move': {
          '0%': {
            transform: 'translate3d(0, 2.5rem, 0)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate3d(0, 0, 0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'printer-text': 'printer-text 3s forwards 500ms',
        'enter-move': 'box-move 1.5s forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [nextui()],
}
export default config
