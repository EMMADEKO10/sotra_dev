/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
      primary: "#3bcf93"
    },
    },
  },

    corePlugins: {
      preflight: false,
    },

  plugins: [
      async () => (await import('daisyui')).default,
    ],
}