import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["var(--font-Poppins)"],
        Josefin: ["var(--font-Josefin)"],
      },
      colors: {
        white: {
          100: "#FFFFFF",
          300: "#FBFBFB",
        },

        gray: {
          100: "#656565",
          200: "#BDBDBD",
          300: "#7C7C7C",
          400: "#525252",
          500: "#F7F7F7",
          600: "#75788B",
          700: "#EFEFEF",
        },

        black: {
          200: "#333333",
        },
        purple: {
          100: "#9E77ED",
        },

        signupBg: "#292929",
        primaryBtn: "#7F56D9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "1000px": "10000px",
        "1100px": "11000px",
        "1200px": "12000px",
        "1300px": "13000px",
        "1500px": "15000px",
        "800px": "800px",
        "400px": "400px",
      },
    },
  },
  plugins: [],
};
export default config;
