/*
 * @Descripttion:
 * @version:
 * @Author: Remons
 * @Date: 2021-04-08 21:09:05
 * @LastEditors: Remons
 * @LastEditTime: 2021-04-08 22:14:15
 */
export default () => {
  const loading = document.loading;
  if (!loading) {
    const dom = document.createElement("div");
    dom.setAttribute("id", "loading");
    document.body.appendChild(dom);
  }
};
