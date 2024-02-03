module.exports = {
  content: ['./*.html', './pages/*.html'],
  theme: {
    screens: {
      sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1320px"
    },
    extend: {
      colors: {
        colorFirst: '#FFD3AF',
        colorSecond: '#232536',
        colorThird: '#5D5F6D',
        colorFourth: '#444CFC',
        colorFifth: '#666DFF',
        colorSixth: '#FFE6D2',
        colorSeventh: '#FFE0C7',
        colorEighth: '#FFDFC6',
        colorNinth: '#ECF8F9',
      },
      boxShadow: {
        'shadowFirst': '',
        'shadowSecond': ''
      }
    },
    fontFamily: {
      'poppins': 'Poppins',
      'poppins500': 'Poppins500',
      'poppins600': 'Poppins600',
      'poppins700': 'Poppins700',
    }
  },
  plugins: [],
}
