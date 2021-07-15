module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Music-player/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/styles/index.scss";
          `,
      },
    },
  },
};
