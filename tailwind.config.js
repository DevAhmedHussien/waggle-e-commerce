/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // add 
    extend: {
      colors:{
        colors: {
          primary: {
            default: "#007BFF", // Primary Blue
            light: "#3399FF", // Lighter shade for hover
            dark: "#0056b3", // Darker shade for buttons
          },
          secondary: {
            default: "#FF6B6B", // Coral Red
            light: "#FFA8A8", // Light Coral
            dark: "#E63946", // Dark Coral
          },
          textColor: {
            default: "#333333", // Main text color (dark gray)
            light: "#666666", // Light gray for subtitles
            muted: "#9CA3AF", // Muted gray
          },
          errorColor: {
            default: "#DC2626", // Red for errors
            light: "#F87171", // Light red
          },
          spanColor: {
            default: "#6366F1", // Indigo for highlights
          },
          labelColor: {
            default: "#374151", // Dark gray for form labels
            light: "#6B7280", // Light gray for muted labels
          },
          background: {
            light: "#F9FAFB", // Off-white background
            dark: "#1F2937", // Dark mode background
          },
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