import daisyui from 'daisyui';

/** 
 * @type {import('tailwindcss').Config} 
 */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        loginColor: "#bec5d1",
        loginBTn: "#007dc0"
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        lobster: ['Lobster', 'cursive'], // Define Lobster as a font family

      },
    },
  },
  plugins: [daisyui],
};
