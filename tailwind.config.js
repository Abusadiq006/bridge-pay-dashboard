/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          rethink: ["'Rethink Sans'", "sans-serif"],
        },
        colors: {
          brand: {
            purple: "#8B5CF6", // Adjust based on your preferred shade
            light: "#F9FAFB",
          }
        }
      },
    },
    plugins: [],
  }