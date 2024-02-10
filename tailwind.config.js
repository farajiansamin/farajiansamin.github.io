/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "paper-texture": "url('/images/beige-paper.png')",
      },
    },
    
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ec4899",

          secondary: "#0049ff",

          accent: "#fbbf24",

          neutral: "#392a1f",

          "base-100": "#fffde9",

          info: "#00b6df",

          success: "#00eba9",

          warning: "#ee7600",

          error: "#ff3d78",

          body:{
           
              'background-color': '#e8e6da'
              
            },
          
        },
      },
    ],
  },
};
