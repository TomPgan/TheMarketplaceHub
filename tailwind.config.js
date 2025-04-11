/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"

  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "Light-red": '#ff7373',
        "Licorice": '#2a1b1f'
      }
    },
  },
  plugins: [],
}