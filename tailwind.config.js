const { sunset, lofi } = require('daisyui/src/theming/themes');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                // 'grid-pattern': "linear-gradient(to bottom, theme('colors.neutral.950 / 100%'), theme('colors.neutral.950 / 0%')), url('/images/noise.png')"
            },
            colors: {
                neutral: colors.neutral
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
            }
            // #1B263B // colors to make a pallette out of
            // #415A77
            // #778DA9
            // #E0E1DD
        }
    },
    daisyui: {
        themes: [
            {
                sunset: {
                    ...require('daisyui/src/theming/themes')['sunset'],
                    
                }
            }
        ]
    },
    plugins: [
        require('daisyui'),
    ]
};
