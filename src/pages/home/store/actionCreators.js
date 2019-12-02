import axios from 'axios';
import * as constants from './constants';
import { List, fromJS } from 'immutable';
const changeHomeData = result => ({
  type: constants.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList,
  topicList: result.topicList
});
const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
  //   转化为immutable list == FromJS
});
export const getHomeInfo = () => {
  return dispatch => {
    axios.get('/api/home.json').then(res => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    });
  };
};

export const toggleTopShow = show => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
});
export const getMoreList = page => {
  return dispatch => {
    // console.log(12);
    axios.get('/api/homeList.json?page=' + page).then(res => {
      const result = res.data.data;
      console.log(result);
      dispatch(addHomeList(result, page + 1));
    });
  };
};
// 获取异步操作
