/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#111111',
          secondary: '#191919',
          orange: {
            from: '#FF5C00',
            to: '#FFA500',
          },
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#F3EFE0',
        },
        accent: {
          burgundy: '#8B0000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      fontSize: {
        'hero-desktop': '64px',
        'hero-mobile': '40px',
      },
      letterSpacing: {
        'wider-xl': '1.5px',
        'wider-2xl': '2px',
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
}
