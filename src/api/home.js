/*
 * @Descripttion:
 * @version:
 * @Author: Remons
 * @Date: 2021-04-08 21:35:01
 * @LastEditors: Remons
 * @LastEditTime: 2021-04-08 21:36:24
 */
import api from "@axios";
const { service } = api;
export default {
  getTest: () =>
    service({
      method: "post",
      url: "/api/test",
    }),
};
