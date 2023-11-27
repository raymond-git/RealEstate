/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      Lato: ['Lato', 'sans-serif'],
    },
    fontSize: {
      'xs': '0.75rem',
      'sm': '0.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      'custom': '2.8125rem',
      'custom2': '1.125rem'
    },
    fontWeight: {
      'thin': 100,
      'extralight': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'black': 900,
    },
    spacing: {
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '17': '17px',
      '18': '18px',
      '19': '19px',
      '20': '20px',
      '21': '21px',
      '22': '22px',
      '23': '23px',
      '24': '24px',
      '25': '25px',
      '26': '26px',
      '27': '27px',
      '28': '28px',
      '29': '29px',
      '30': '30px',
      '60': '60px',
    },
    textColor: {
      'custom-blackColor': '#000000',
      'custom-whiteColor': '#FFF',
      'custom-greenColor': '#2C9143'
    },
    backgroundColor: {
      'custom-black': '#000000'
    }
  },
  plugins: [],
}


