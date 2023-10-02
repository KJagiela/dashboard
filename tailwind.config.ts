import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#4D9078',
        secondary: '#222725',
        accent: '#DAF7DC',
        myyellow: '#D6D84F',
        coolgray: '#9D96B8',
      },
    },
    plugins: [],
  }
} satisfies Config;
