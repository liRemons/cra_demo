/*
 * @Descripttion:
 * @version:
 * @Author: Remons
 * @Date: 2021-04-08 21:05:03
 * @LastEditors: Remons
 * @LastEditTime: 2021-04-08 21:56:14
 */
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://127.0.0.1:3000",
      pathRewrite: {
        "^/api": "",
      },
      changeOrigin: true,
    })
  );
  // app.use
};
