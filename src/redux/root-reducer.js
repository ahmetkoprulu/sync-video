import { combineReducers } from "redux";
import playListReducer from './PlayList/play-list.reducer.js';
import userListReducer from './UserList/user-list.reducer.js'

const rootReducer = combineReducers({
  playList: playListReducer,
  userList: userListReducer
})

export default rootReducer