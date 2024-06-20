/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    // },
    extend: {
      colors: {
        firstGrey: '#212529',
        secondGrey: '#343A40',
        thirdGrey: '#495057',
        fourthGrey: '#6C757D',
        fifthGrey: '#ADB5BD',
        sixthGrey: '#CED4DA',
        seventhGrey: '#DEE2E6',
        eightGrey: '#E9ECEF',
        lastGrey: '#F8F9FA',
      },
    },
  },
  plugins: [],
};
