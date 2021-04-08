/*
 * @Descripttion:
 * @version:
 * @Author: Remons
 * @Date: 2021-04-07 22:28:33
 * @LastEditors: Remons
 * @LastEditTime: 2021-04-08 22:18:14
 */
import { combineReducers } from "redux";
import utils from "./utils/reducer";
import Home from "./Home/reducer";
const reducer = combineReducers({
  utils,
  Home,
});

export default reducer;
