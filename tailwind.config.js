/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#1A365D", // Deep Navy Blue
          light: "#2A4365", // Lighter Navy
          dark: "#12283A", // Darker Navy
          hover: "#2C5282", // Hover state for primary
        },
        secondary: {
          default: "#C53030", // Rich Burgundy
          light: "#E53E3E", // Light Burgundy
          dark: "#9B2C2C", // Dark Burgundy
          hover: "#E53E3E", // Hover state for secondary
        },
        accent: {
          default: "#D69E2E", // Gold
          light: "#ECC94B", // Light Gold
          dark: "#B7791F", // Dark Gold
          hover: "#ECC94B", // Hover state for accent
        },
        textColor: {
          default: "#FFFFFF", // White for default text
          dark: "#1A365D", // Black for dark text
          light: "#F3F4F6", // Light Gray for subtle text
          muted: "#9CA3AF", // Muted Gray for less important text
        },
        errorColor: {
          default: "#E53E3E", // Red for errors
          light: "#FC8181", // Light Red
        },
        spanColor: {
          default: "#4C51BF", // Indigo for highlights
        },
        labelColor: {
          default: "#1A365D", // Deep Navy Blue
          light: "#D1D5DB", // Light Gray for muted labels

        },
        background: {
          default: "#FFFFFF", // White for default background
          dark: "#1A202C", // Dark Mode Background
          light: "#F3F4F6", // Light Gray Background
          hover: "#EDF2F7", // Hover state for background
        },
      },
      animation: {
        slide: 'slide 20s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};