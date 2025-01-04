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
