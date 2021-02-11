module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // method of SCSS to use variables globally
        data: `
          @import '@/assets/styles/variables.scss';
        `,
      },
    },
  },
};
