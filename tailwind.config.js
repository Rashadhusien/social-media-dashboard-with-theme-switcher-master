/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // primary colors
        LimeGreen: "hsl(163, 72%, 41%)",
        BrightRed: "hsl(356, 69%, 56%)",
        Facebook: "hsl(208, 92%, 53%)",
        Twitter: " hsl(203, 89%, 53%)",
        Instagram: "linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
        fromInsta: "hsl(37, 97%, 70%)",
        toInsta: "hsl(329, 70%, 58%)",
        YouTube: " hsl(348, 97%, 39%)",
        // --------------------------------
        // toggle Dark Theme
        ToggleDark: " linear gradient  to hsl(146, 68%, 55%)",
        gradfrom: "hsl(210, 78%, 56%)",
        gradto: "hsl(146, 68%, 55%)",
        VeryDarkBlueBg: "hsl(230, 17%, 14%)",
        VeryDarkBluTopBGPattern: "hsl(232, 19%, 15%)",
        DarkDesaturatedBlueCardBG: " hsl(228, 28%, 20%)",
        DesaturatedBlueText: "hsl(228, 34%, 66%)",
        WhiteText: "hsl(0, 0%, 100%)",
        dhover: "#333a56",
        // --------------------------------
        // toggle light Theme
        Toggle: "hsl(230, 22%, 74%)",
        WhiteBG: "hsl(0, 0%, 100%)",
        VeryPaleBlueTopBGPattern: "hsl(225, 100%, 98%)",
        LightGrayishBlueCardBG: "hsl(227, 47%, 96%)",
        DarkGrayishBlueText: "hsl(228, 12%, 44%)",
        VeryDarkBlueText: "hsl(230, 17%, 14%)",
        whover: "#e1e3f0",

        // --------------------------------
      },
      width: {
        60: "60",
      },
      height: {
        212: "212",
      },
    },
  },
  plugins: [],
};
