/*
 * @Descripttion: 
 * @version: 
 * @Author: Remons
 * @Date: 2021-04-07 22:31:15
 * @LastEditors: Remons
 * @LastEditTime: 2021-04-07 22:36:32
 */


import * as type from './type'
const defaultState = {
  scroll:{}
}

export default ( state = defaultState, action = {} )=> {
  const newState = { ...state }
  switch (action.type) {
    case type.SET_SCROLL:
      
      break;
  
    default:
      break;
  }
  return newState
}