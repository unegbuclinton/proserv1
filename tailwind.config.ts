import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary':
          ' linear-gradient(90deg, #D8C5B4 0%, rgba(216, 197, 180, 0.6) 100%)',
      },
      colors: {
        primary: '#2A2A2D',
        tertiary: '#D1C1B3',
        secondary: '#806145',
        washedWhite: '#F4F4F4',
      },
    },
  },
  plugins: [],
}
export default config
