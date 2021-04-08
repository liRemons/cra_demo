/*
 * @Descripttion:
 * @version:
 * @Author: Remons
 * @Date: 2021-04-08 21:38:19
 * @LastEditors: Remons
 * @LastEditTime: 2021-04-08 22:19:06
 */
import * as type from "./type";
const defaultState = {
  test: "",
};

export default (state = defaultState, action = {}) => {
  const newState = { ...state };
  switch (action.type) {
    case type.TEST:
      break;

    default:
      break;
  }
  return newState;
};
