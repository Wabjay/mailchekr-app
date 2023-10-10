/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
      "UntitledSans-700": ["UntitledSans-Bold", 'sans-serif'],
      "UntitledSans-600": ["UntitledSans-SemiBold", 'sans-serif'],
      "UntitledSans-500": ["UntitledSans-Medium", 'sans-serif'],
      "UntitledSans": "UntitledSans",
      "UntitledSans-300": ["UntitledSans-Light", 'sans-serif'],
      "Inter": ["Inter", 'sans-serif'],
    },
    boxShadow: {
      'button': '-1px 1px 4px 0px rgba(168, 177, 175, 0.30), 1px -1px 4px 0px rgba(168, 177, 175, 0.30);',
    },
      colors: {
        // Yellow 
        'yellow-900': '#291E00',
        'yellow-800': '#523C00',
        'yellow-700': '#7A5900',
        'yellow-600': '#B88700',
        'yellow-500': '#FFB900',
        'yellow-400': '#FFC936',
        'yellow-300': '#FED86E',
        'yellow-200': '#FFE6A2',
        'yellow-100': '#FFF0C7',
        'yellow-50': '#FFF6DE',
        'yellow-10': '#FFFCF4',
        // Green
        'green-900': '#080D09',
        'green-800': '#1F3121',
        'green-700': '#37583B',
        'green-600': '#4F7D54',
        'green-500': '#65996C',
        'green-400': '#88B18D',
        'green-300': '#ABC8AE',
        'green-200': '#C4D8C7',
        'green-100': '#DAE7DB',
        'green-50': '#E8EFE9',
        'green-10': '#F2F7F3',
        // Red
        'red-900': '#291E00',
        'red-800': '#523C00',
        'red-700': '#7A5900',
        'red-600': '#CC2D0D',
        'red-500': '#F14320',
        'red-400': '#FFC936',
        'red-300': '#FED86E',
        'red-200': '#FFE6A2',
        'red-100': '#FFF0C7',
        'red-50': '#FFF0ED',
        'red-10': '#FFFCF4',
        // Malachite
        'malachite-900': '#291E00',
        'malachite-800': '#064611',
        'malachite-700': '#0A7F1D',
        'malachite-600': '#B88700',
        'malachite-500': '#FFB900',
        'malachite-400': '#FFC936',
        'malachite-300': '#FED86E',
        'malachite-200': '#FFE6A2',
        'malachite-100': '#FFF0C7',
        'malachite-50': '#ECFFEF',
        'malachite-10': '#FFFCF4',
        // Grey
        'grey-900': '#0A0A0A',
        'grey-800': '#523C00',
        'grey-700': '#7A5900',
        'grey-600': '#484745',
        'grey-500': '#676664',
        'grey-400': '#989694',
        'grey-300': '#BBBBB9',
        'grey-200': '#D4D4D3',
        'grey-100': '#E3E3E2',
        'grey-50': '#F3F3F2',
        'grey-10': '#F9F9F9',
      },
      // backgroundColor: {
      //   modalBlur: 'var(--overlay-color, linear-gradient(180deg, rgba(1, 26, 39, 0.28) 4.69%, rgba(1, 26, 39, 0.25) 56.25%, rgba(1, 26, 39, 0.37) 100%))';
      // },
      backgroundImage: {
        'modalBlur': 'var(--overlay-color, linear-gradient(180deg, rgba(1, 26, 39, 0.28) 4.69%, rgba(1, 26, 39, 0.25) 56.25%, rgba(1, 26, 39, 0.37) 100%))'

      },
    },
  },
  plugins: [],
}