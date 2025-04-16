/** @type {import('tailwindcss').Config} */
// tailwind.config.js
// tailwind.config.js
module.exports = {
  darkMode: "class", // Enables dark mode via class
  theme: {
    extend: {
      colors: {
        // Primary (Pink-based)
        primary: {
          50: "#FFF0F5",
          100: "#FFE5EE",
          200: "#FFCCDD",
          300: "#FF99BB",
          400: "#FF6699",
          500: "#FF4081", // Base
          600: "#E03372",
          700: "#C02662",
          800: "#A01A52",
          900: "#801042",
        },

        // Secondary (Indigo-based)
        secondary: {
          50: "#F0F4FF",
          100: "#E0E9FF",
          200: "#C5D3FF",
          300: "#9FB5FF",
          400: "#7B97FF",
          500: "#3F51B5", // Base
          600: "#3647A0",
          700: "#2D3D8B",
          800: "#243376",
          900: "#1B2961",
        },

        // Backgrounds (Dark/Light)
        background: {
          light: "#FFFFFF",
          dark: "#121212",
        },

        // Surfaces (Cards, Modals)
        surface: {
          light: "#F8F9FA",
          dark: "#1E1E1E",
        },

        // Text
        text: {
          light: {
            primary: "#212121",
            secondary: "#757575",
            disabled: "#BDBDBD",
          },
          dark: {
            primary: "#FFFFFF",
            secondary: "rgba(255,255,255,0.7)",
            disabled: "rgba(255,255,255,0.5)",
          },
        },

        // Anime Status (Airing, Completed, etc.)
        status: {
          airing: {
            300: "#81C784",
            500: "#4CAF50", // Base
            700: "#388E3C",
          },
          completed: {
            300: "#64B5F6",
            500: "#2196F3", // Base
            700: "#1976D2",
          },
        },

        // Genres (Action, Romance, etc.)
        genre: {
          action: "#F44336",
          romance: "#E91E63",
          fantasy: "#00BCD4",
          // ...add more genres
        },
      },
    },
  },
};