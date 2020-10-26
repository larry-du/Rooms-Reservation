module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/roomOrder/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "./src/assets/scss/font/indexFont.scss";
        `
      }
    }
  }
};
