/*
 * @Descripttion:
 * @version:
 * @Author: Remons
 * @Date: 2021-04-07 22:31:05
 * @LastEditors: Remons
 * @LastEditTime: 2021-04-07 22:34:38
 */
import * as type from "./type";
const action = {
  setScroll: (payload) => (dispatch) => {
    const data = {
      type: type.SET_SCROLL,
      payload,
    };
    dispatch(data);
  },
};

export default action;
