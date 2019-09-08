import { combineReducers } from "redux";
import playListReducer from './PlayList/play-list.reducer.js';
import userListReducer from './UserList/user-list.reducer.js'
import chatPanelReducer from './ChatPanel/chat-panel.reducer.js'

const rootReducer = combineReducers({
  playList: playListReducer,
  userList: userListReducer,
  chatPanel: chatPanelReducer
})

export default rootReducer