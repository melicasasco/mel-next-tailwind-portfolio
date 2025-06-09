import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#52b788',
          500: '#52b788'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maskImage: {
        'radial-at-center': 'radial-gradient(circle at center, black, transparent)',
      },
      maskPosition: {
        'radial-from-45%': '45%',
        'radial-to-80%': '80%',
      }
    },
  },
  plugins: [],
}
export default config
