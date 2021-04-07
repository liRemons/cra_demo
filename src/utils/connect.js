/*
 * @Descripttion:
 * @version:
 * @Author: Remons
 * @Date: 2021-04-07 22:43:19
 * @LastEditors: Remons
 * @LastEditTime: 2021-04-07 22:48:51
 */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
export default ({ attr, actionCreators }) => (components) => {
  const mapStateToProps = (state, ownProps) => {
    if (attr instanceof Array) {
      let obj = {};
      attr.forEach((item) => {
        obj = { ...obj, ...state[item] };
      });
      return obj;
    } else {
      return state[attr];
    }
  };
  const mapDispatchToProps = (dispatch, ownProps) => {
    if (actionCreators instanceof Array) {
      let obj = {};
      actionCreators.forEach((item) => {
        obj = { ...obj, ...bindActionCreators(item, dispatch) };
      });
      return obj;
    } else {
      return bindActionCreators(actionCreators, dispatch);
    }
  };
  return connect(mapStateToProps, mapDispatchToProps)(components);
};
