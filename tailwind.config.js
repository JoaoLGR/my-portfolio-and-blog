/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  safelist: [
    {
      pattern: /^grid-cols-/,
      variants: ["sm", "md", "lg", "xl", "xxl"]
    },
    {
      pattern: /^gap-/,
      variants: ["sm", "md", "lg", "xl", "xxl"]
    }
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d1e2a",
        secondary: "#112e4f",
        link: "#02dbfc"
      }
    }
  },
  plugins: []
}
