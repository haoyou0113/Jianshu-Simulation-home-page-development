import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { combineReducers } from 'redux-immutable';
//redux-immutable
const reducer = combineReducers({ header: headerReducer, home: homeReducer });
// 整合reducer
export default reducer;
