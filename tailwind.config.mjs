/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#101018",
        white: "#ffffff",
        green: "#5BEB07",
        grey: "#B9ADAC",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        times: ['"Times New Roman"', "Times", "serif"],
      },
      backgroundImage: {
        texture: "url('/images/texture.webp')",
      },
    },
  },
  plugins: [],
};
