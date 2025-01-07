/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#000000",  // Black for primary elements
                    secondary: "#ff8b00", // White for secondary elements
                    accent: "#000000",   // Black accent
                    neutral: "#00ddff",  // Neutral background
                    "base-100": "#ebf8fa", // Main background color
                    "base-content": "#000000", // Main text color
                },
            },
        ],
    },
};
