/*
 * @Descripttion:
 * @version:
 * @Author: Remons
 * @Date: 2021-04-08 21:38:13
 * @LastEditors: Remons
 * @LastEditTime: 2021-04-08 21:43:54
 */
import * as type from "./type";
import { Home } from "@api";
const { getTest } = Home;
const action = {
  setTest: (payload) => async (dispatch) => {
    const res = await getTest();
    const data = {
      type: type.TEST,
      payload,
    };
    dispatch(data);
    // return res
  },
};

export default action;
