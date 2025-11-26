const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: {
            "@tailwindcss/postcss": {},
            autoprefixer: {},
          },
        },
      },
    },
  },

  chainWebpack: (config) => {
    config.plugin("define").tap((args) => {
      args[0]["__VUE_PROD_HYDRATION_MISMATCH_DETAILS__"] =
        JSON.stringify(false);
      return args;
    });
  },
});
