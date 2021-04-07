/*
 * @Descripttion: 
 * @version: 
 * @Author: Remons
 * @Date: 2021-04-07 22:26:37
 * @LastEditors: Remons
 * @LastEditTime: 2021-04-07 22:29:31
 */
import { createStore ,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
const store = createStore(reducer,applyMiddleware(thunk))
export default store