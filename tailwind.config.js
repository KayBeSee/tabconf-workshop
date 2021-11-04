module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "tabconf-blue": {
          50: "#f3f5f6",
          100: "#e6ebed",
          200: "#c1cdd1",
          300: "#9bafb5",
          400: "#51727e",
          500: "#063647",
          600: "#053140",
          700: "#052935",
          800: "#04202b",
          900: "#031a23",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              fontWeight: 500,
              color: theme("colors.yellow.600"),
            },
            "code.block": {
              color: "#111827",
              fontWeight: "inherit",
            },
            "code.block::before": {
              content: '""',
            },
            "code.block::after": {
              content: '""',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
