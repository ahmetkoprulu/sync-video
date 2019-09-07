import { PlayListActionTypes } from './play-list.type.js'
import { addVideo, setNextVideo, deleteVideo, replaceVideo } from './play-list.utils'
import { statement } from '@babel/template';

const INITIAL_STATE = {
  videos: [
    {
      title: 'as - Road to Zion ft. Na1',
      link: 'S9xnYasQB2w'
    },
    {
      title: 'sa - Road to Zion ft. Na2',
      link: 'S9xnYasQB2'
    },
    {
      title: 'meh - Road to Zion ft. Na3',
      link: 'S9xnYasQB'
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
        playing: currentState.videos.length > 0 ? currentState.videos[0].link : null
      }

    case PlayListActionTypes.SET_NEXT_VIDEO:
      return {
        ...currentState,
        playing: setNextVideo(currentState.playing, currentState.videos)
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

    case PlayListActionTypes.VIDEO_DRAG_OVER:
      return {
        ...currentState,
        videos: replaceVideo(currentState.videos, 
          action.payload.index, 
          action.payload.selectedVideo)
      }

    default:
      return currentState
  }
}

export default playListReducer