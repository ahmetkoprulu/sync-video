import { combineReducers } from "redux";
import playListReducer from './PlayList/play-list.reducer.js';

const rootReducer = combineReducers({
  playList: playListReducer
})

export default rootReducer