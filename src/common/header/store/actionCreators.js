import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});
export const changeMouse = () => ({
  type: constants.MOUSE_ENTER
});
export const changeLeave = () => ({
  type: constants.MOUSE_LEAVE
});
export const changePage = (page, spin) => ({
  type: constants.CHANGE_PAGE,
  page,
  spin
  //接受此时的页码page 传递给reducer
});

export const getList = () => {
  return dispatch => {
    axios
      .get('/api/headerList.json')
      .then(res => {
        const data = res.data;
        dispatch(changeList(data.data));
      })
      .catch(() => {
        console.log('error');
      });
  };
};
const changeList = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
  //取整
  //派发给reducer
});
// 转换数组为immutable数组 如果不转换传过去的data是普通数组 无法与immutable相互匹配
// ajax actionCreators.js
