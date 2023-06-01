/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            'sans': ['Jost'],
            'oswald': ['Oswald', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                wafer: '#e3d6d3',
                bisonHide: "#C0b3a2",
                alabaster: "#Fcfcfc",
                santaFe: "#BA6F59",
                trinidad: "#Ef4a03",
                thistleGreen: "#C4C6A8",
                axolotl: "#505C45",
                neutral1: "#1E2029",
                black: {
                    DEFAULT: '#212020',
                    900: '#000'
                }
            },
        },

    },
    plugins: [],
}
