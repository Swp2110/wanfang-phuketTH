module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
    safelist: [/data-theme$/, /^btn-.*/, /^text-.*/],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: { min: '320px', max: '650px' },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: '651px', max: '1023px' },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: '1024px', max: '1279px' },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: '1280px', max: '1535px' },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        '2xl': { min: '1536px' },
        // => @media (min-width: 1536px) { ... }
      },
      fontSize: {
        '10xl': '10rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@rvxlab/tailwind-plugin-ios-full-height'),

    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#D52E2E',
          secondary: '#f6d860',
          accent: '#37cdbe',
          neutral: '#3d4451',
        },
      },
    ],
  },
}
