module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'steelseries-orange': '#fc4e03',
      },

      fontFamily: {
        'replica-pro': [
          'Replica Pro',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
      },

      spacing: {
        128: '32rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
