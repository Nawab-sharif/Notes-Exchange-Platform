import { useContext, useState } from "react";
import UserContext from "./src/Context/UserContext";

const flowbite = require("flowbite-react/tailwind");

let mode = true;

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
        bgColor: mode ? '#d0d2d6' : '#1F2937' ,
        textPrimary: mode ? '#1F2937' : '#d0d2d6',
        textSecondry:'#787b82bf',
      
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}
