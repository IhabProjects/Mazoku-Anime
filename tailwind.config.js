/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base Colors
        primary: "#FF4081",
        secondary: "#3F51B5",
        accent: "#00BCD4",
        background: "#121212",
        surface: "#1E1E1E",
        error: "#FF5252",
        success: "#4CAF50",
        warning: "#FFC107",
        info: "#2196F3",

        // Text Colors
        text: {
          primary: "#FFFFFF",
          secondary: "rgba(255, 255, 255, 0.7)",
          disabled: "rgba(255, 255, 255, 0.5)",
          inverse: "#000000",
        },

        // Anime Status
        anime: {
          airing: "#4CAF50",
          completed: "#2196F3",
          upcoming: "#FF9800",
          hiatus: "#9E9E9E",
          cancelled: "#F44336",
        },

        // Ratings
        rating: {
          high: "#FFEB3B",
          average: "#FF9800",
          low: "#F44336",
        },

        // Genres
        genre: {
          action: "#F44336",
          adventure: "#4CAF50",
          comedy: "#FFC107",
          drama: "#9C27B0",
          fantasy: "#00BCD4",
          horror: "#607D8B",
          romance: "#E91E63",
          scifi: "#3F51B5",
        },
      },
      boxShadow: {
        small: "0 1px 3px rgba(0, 0, 0, 0.12)",
        medium: "0 4px 6px rgba(0, 0, 0, 0.16)",
        large: "0 10px 20px rgba(0, 0, 0, 0.19)",
      },
      borderRadius: {
        small: "4px",
        medium: "8px",
        large: "12px",
      },
    },
  },
  plugins: [],
};