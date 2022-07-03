module.exports = {
  content: ['.//src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  purge: {
    mode: 'all',
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
      './stories/**/*.{js,ts,jsx,tsx}',
      './src/components/**/**/*.{ts, tsx}',
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
