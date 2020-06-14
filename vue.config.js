const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://www.bgysmartcity.com/",
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/admin'
        }
      }
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("base", resolve("src/base"))
      .set("common", resolve("src/common"))
      .set("assets", resolve("src/assets"));
  },
  css: {
    loaderOptions: {
      less: {
        import: resolve("src/common/less/common")
      },
    }
  }
};
