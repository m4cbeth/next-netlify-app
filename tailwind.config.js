const {
    default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
  
//   /** @type {import('tailwindcss').Config} */
//   module.exports = {
//     content: [
//       "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//       "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//       "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  
//       // Or if using `src` directory:
//       "./src/**/*.{js,ts,jsx,tsx,mdx}",
//     ],
//     darkMode: "class",
//     theme: {
//       extend: {},
//     },
//     plugins: [addVariablesForColors],
//   };
  
//   // This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
//   function addVariablesForColors({
//     addBase,
//     theme
//   }) {
//     let allColors = flattenColorPalette(theme("colors"));
//     let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));
  
//     addBase({
//       ":root": newVars,
//     });
//   }
  
// const { sunset, lofi } = require('daisyui/src/theming/themes');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: ['class'],
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
    	extend: {
    		backgroundImage: {
                'synth-gradient': 'linear-gradient(51deg, rgba(10,142,86,1) 0%, rgba(53,9,121,1) 31%, rgba(176,5,179,1) 63%, rgba(0,212,255,1) 100%)',
            },
    		colors: {
    			neutral: 'colors.neutral'
    		},
    		fontFamily: {
    			sans: [
                    'Lexend',
    				'Inter',
                    ...defaultTheme.fontFamily.sans
                ]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    daisyui: {
        themes: [
            {
                black: {
                    ...require('daisyui/src/theming/themes')['black'],
                    primary: "white",
                    secondary: "003566",
                    accent: "0077b6",
                    neutral: colors.gray[800]
                },
                synthwave: {
                    ...require('daisyui/src/theming/themes')['synthwave'],
                },
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: "black",
                    secondary: "003566",
                    accent: "0077b6",
                    neutral: colors.slate[500],
                    // take this out in production
                    "base-100": process.env.NODE_ENV === 'production' ? "a0a1ad" : "fff"
                }

            }
        ]
    },
    plugins: [
        require('daisyui'),
        require('tailwindcss-animate')
    ]
};
