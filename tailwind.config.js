module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: '#3A4256',
          neutral: '#3d4451',
          gradBg: 'bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]',
          'base-100': '#ffffff',
        },
      },
      // 'dark',
      'cupcake',
    ],
  },
};
