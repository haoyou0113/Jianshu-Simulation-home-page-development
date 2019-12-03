import * as constants from './constants';
import { fromJS } from 'immutable';
// 转化对象
const defaultState = fromJS({ title: '', content: '' });

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL_DATA:
      return state.merge({
        title: fromJS(action.result.title),
        content: fromJS(action.result.content)
      });

    default:
      return state;
  }
};
