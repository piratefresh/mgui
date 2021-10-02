module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: {
        standard: ["outline-none"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1920px",
      },
      colors: {
        primary: "var(--primary)",
        "primary-2": "var(--primary-2)",
        secondary: "var(--secondary)",
        "secondary-2": "var(--secondary-2)",
        hover: "var(--hover)",
        "hover-1": "var(--hover-1)",
        "hover-2": "var(--hover-2)",
        "accent-0": "var(--accent-0)",
        "accent-1": "var(--accent-1)",
        "accent-2": "var(--accent-2)",
        "accent-3": "var(--accent-3)",
        "accent-4": "var(--accent-4)",
        "accent-5": "var(--accent-5)",
        "accent-6": "var(--accent-6)",
        "accent-7": "var(--accent-7)",
        "accent-8": "var(--accent-8)",
        "accent-9": "var(--accent-9)",
        "mine-shaft": {
          DEFAULT: "#222222",
          50: "#959595",
          100: "#888888",
          200: "#6F6F6F",
          300: "#555555",
          400: "#3C3C3C",
          500: "#222222",
          600: "#090909",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        crimson: {
          DEFAULT: "#E7131A",
          50: "#FDE3E4",
          100: "#FBCBCD",
          200: "#F79C9F",
          300: "#F36D71",
          400: "#EF3E44",
          500: "#E7131A",
          600: "#B80F15",
          700: "#890B0F",
          800: "#5A070A",
          900: "#2B0305",
        },
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: {
          default: "var(--text-secondary)",
          light: "var(--text-secondary-light)",
          dark: "var(--text-secondary-dark)",
        },
      },
      "secondary-text": {
        light: "var(--text-secondary-light)",
        dark: "var(--text-secondary-dark)",
      },

      boxShadow: {
        "outline-normal": "0 0 0 2px var(--accent-2)",
        magical:
          "rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px",
      },
      lineHeight: {
        "extra-loose": "2.2",
      },
      scale: {
        120: "1.2",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
    },
  },
};
