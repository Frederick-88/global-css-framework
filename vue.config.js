module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // method of SCSS to use variables globally
        /**
         * Warning!
         *
         * Do not import actual styles
         *
         * Only import variables, mixins, function because they won't appear in actual build
         * Importing style will include them in every components
         *
         */
        data: `
          @import '@/assets/styles/variables.scss';
          @import '@/assets/icomoon/variables.scss';
          @import '@/assets/styles/deviceMixins.scss';
        `,
      },
    },
  },
};
