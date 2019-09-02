import { PlayListActionTypes } from './play-list.type.js'
import { addVideo } from './play-list.utils'

const INITIAL_STATE = {
  videos: [
    {
      title: 'Damian Marley - Road to Zion ft. Nas',
      link: 'S9xnYasQB2w'
    },
    {
      title: 'Damian Marley - Road to Zion ft. Nas',
      link: 'S9xnYasQB2w'
    },
    {
      title: 'Damian Marley - Road to Zion ft. Nas',
      link: 'S9xnYasQB2w'
    }
  ],
  playing: 0
}

const playListReducer = (currentState=INITIAL_STATE, action) => {
  switch (action.type){
    case PlayListActionTypes.ADD_VIDEO:
      return {
        ...currentState,
        videos: addVideo(currentState, action.payload)
      }

    case PlayListActionTypes.SET_PLAYING:
      return {
        ...currentState,
        playing: action.payload
      }

    default:
      return currentState
  }
}

export default playListReducer