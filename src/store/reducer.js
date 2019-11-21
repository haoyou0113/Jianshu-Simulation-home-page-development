import { reducer as headerReducer } from '../common/header/store';
import { combineReducers } from 'redux-immutable';
//redux-immutable
const reducer = combineReducers({ header: headerReducer });
// 整合reducer
export default reducer;
