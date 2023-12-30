module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      kaushan: ["Kaushan Script"],
    },
    extend: { color: { green: { DEFAULT: "#00f260" } } },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // Other plugins...
  ],
};
