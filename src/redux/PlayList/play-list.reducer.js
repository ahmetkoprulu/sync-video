import { PlayListActionTypes } from './play-list.type.js'

const INITIAL_STATE = {
  list: [],
  playing: ''
}

const playListReducer = (currentState=INITIAL_STATE, action) => {
  switch (action.type){
    case PlayListActionTypes.ADD_VIDEO:
      return {
        ...currentState,
        list: currentState.push(action.payload)
      }

    default:
      return currentState
  }
}

export default playListReducer