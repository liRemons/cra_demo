/*
 * @Descripttion: 
 * @version: 
 * @Author: Remons
 * @Date: 2021-04-07 21:46:39
 * @LastEditors: Remons
 * @LastEditTime: 2021-04-08 21:12:43
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@store";
import RouteEl from "@router";
import "antd/dist/antd.css";
import { createLoadingDOM } from '@utils'
createLoadingDOM()
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RouteEl></RouteEl>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
