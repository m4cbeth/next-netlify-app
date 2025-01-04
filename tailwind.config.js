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
    		backgroundImage: {},
    		colors: {
    			neutral: 'colors.neutral'
    		},
    		fontFamily: {
    			sans: [
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
                sunset: {
                    ...require('daisyui/src/theming/themes')['sunset']
                    
                }
            }
        ]
    },
    plugins: [
        require('daisyui'),
        require('tailwindcss-animate')
    ]
};
