module.exports = {
    purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
            kaushan: ["Kaushan Script"],
        },
        extend: {
            colors: {
                green: { DEFAULT: "#00f260" },
                black: { DEFAULT: '#000000' },
                DarkBlue: { DEFAULT: '#0e063a' },
                DarkPurple: { DEFAULT: '#3C0753' },
                Purple: '#8E05C2'
            },
            backgroundColor: ['hover'],
        },
    },
    variants: {
        extend: {
            backgroundColor: ['hover'],
            textColor: ['hover', 'dark'],
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide')
        // Other plugins...
    ],
};
