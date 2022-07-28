const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");
const absolutePaths = [path.join(__dirname, "../components/micro-app"), path.join(__dirname, "../components/sentry")];
module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig, { env, paths }) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];
        match.loader.include = include.concat[absolutePaths];
      }
      return webpackConfig;
    }
  },
  devServer: {
    port: 3000
  },
};
