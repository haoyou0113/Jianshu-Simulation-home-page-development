import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';
const changedetailData = result => ({
  type: constants.CHANGE_DETAIL_DATA,
  result
});
export const getDetail = id => {
  return dispatch => {
    axios
      .get('/api/detail.json?id' + id)
      .then(res => {
        const result = res.data.data[id - 1];
        console.log(result);
        dispatch(changedetailData(result));
      })
      .catch(() => {
        console.log('error');
      });
  };
};

// 转换数组为immutable数组 如果不转换传过去的data是普通数组 无法与immutable相互匹配
// ajax actionCreators.js
