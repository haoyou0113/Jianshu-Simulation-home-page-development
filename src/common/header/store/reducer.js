import * as constants from './constants';
import { fromJS } from 'immutable';
// 转化对象
const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true);
    // 结合之前的对象返回新的对象 类似return newstate
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constants.CHANGE_PAGE:
      return state.set('page', action.page);
    // 接受从actionCreator 传递来的page 页码 替换掉此时的page
    case constants.CHANGE_LIST:
      return state.merge({ list: action.data, totalPage: action.totalPage });
    // merge相当于同时执行多个set
    default:
      return state;
  }
};
