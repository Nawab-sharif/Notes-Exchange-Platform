const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5b7fe2',
        secondry:'#b5d1f1b7',
        accent: '#FBBF24',
        bgColor: '#d0d2d6',
        textPrimary:'#1F2937',
        textSecondry:'#787b82bf'
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}