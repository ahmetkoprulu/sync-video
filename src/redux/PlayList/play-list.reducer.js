import { PlayListActionTypes } from './play-list.type.js'
import { addVideo, setNextVideo, deleteVideo } from './play-list.utils'
import { statement } from '@babel/template';

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
  playing: null
}

const playListReducer = (currentState=INITIAL_STATE, action) => {
  switch (action.type){
    case PlayListActionTypes.ADD_VIDEO:
      return {
        ...currentState,
        videos: addVideo(currentState, action.payload)
      }
    
    case PlayListActionTypes.START_FROM_BEGINNING:
      return {
        ...currentState, 
        playing: currentState.videos.length > 0 ? 0 : null
      }

    case PlayListActionTypes.SET_NEXT_VIDEO:
      return {
        ...currentState,
        playing: setNextVideo(currentState.playing, currentState.videos.length)
      }

    case PlayListActionTypes.SET_PLAYING:
      return {
        ...currentState,
        playing: action.payload
      }

    case PlayListActionTypes.CHANGE_ORDER:
      return {
        ...currentState,

      }
    
    case PlayListActionTypes.DELETE_VIDEO:
      return {
        ...currentState,
        ...deleteVideo(currentState.videos, action.payload)
      }

    default:
      return currentState
  }
}

export default playListReducer