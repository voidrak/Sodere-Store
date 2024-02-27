/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      ROBOTO: ["Roboto, sans-serif"],
      OSWALD: ["Oswald, sans-serif"],
      MANROPE: ["Manrope", "sans-serif"],
      SANS: ["ui-sans-serif", "system-ui", "sans-serif"],
      MONO: ["Poppies", "SFMono-Regular", "Menlo", "Monaco"],
    },
  },
  plugins: [],
};
