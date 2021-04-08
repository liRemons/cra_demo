/*
 * @Descripttion:
 * @version:
 * @Author: Remons
 * @Date: 2021-04-07 22:37:20
 * @LastEditors: Remons
 * @LastEditTime: 2021-04-08 22:06:38
 */
import Login from "@pages/login";
import Home from "@pages/home";
export const option = [
 
  {
    path: "/login",
    component: Login,
    meta: {
      title: "登录",
      isPublicCom: true,
    },
  },
  {
    path: "/",
    component: Home,
    meta: {
      title: "首页",
    },
  },
];
