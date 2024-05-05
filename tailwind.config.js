const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                black: colors.black,
                white: colors.white,
                rose: colors.rose,
                pink: colors.pink,
                fuchsia: colors.fuchsia,
                purple: colors.purple,
                violet: colors.violet,
                indigo: colors.indigo,
                blue: colors.blue,
                lightBlue: colors.lightBlue,
                sky: colors.sky,
                cyan: colors.cyan,
                teal: colors.teal,
                emerald: colors.emerald,
                green: colors.green,
                lime: colors.lime,
                yellow: colors.yellow,
                amber: colors.amber,
                orange: colors.orange,
                red: colors.red,
                slate: colors.slate,
                zinc: colors.zinc,
                gray: colors.gray,
                neutral: colors.blueGray,
                stone: colors.stone,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('daisyui'),
    ],
};
