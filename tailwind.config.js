module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'background': 'var(--NIght, #121214)',
        'bgSelect': '#242424',
        'bgInactive': 'rgba(36, 36, 36, 0.25)',


      },
   
 
      borderColor: {
        'border': 'var(--border, #202024)'
      },
      colors: {
        'background': 'var(--NIght, #121214)',
        'text': 'var(--text, #e1e1e6)',
        'border': 'var(--border, #202024)',
        'customGreen': '#0AE360',
        'minus': '#EB5B64',
        'plus': '#0AE360',
      }
    },
  },
  plugins: [],
};
