import { PlayListActionTypes } from './play-list.type.js'

export const addVideo = video => ({
  type: PlayListActionTypes.ADD_VIDEO,
  payload: video
})

export const startFromBeginning = () => ({
  type: PlayListActionTypes.START_FROM_BEGINNING
})

export const setNextVideo = () => ({
  type: PlayListActionTypes.SET_NEXT_VIDEO
})

export const setPlaying = index => ({
  type: PlayListActionTypes.SET_PLAYING,
  payload: index
})

export const changeOrder = (video, currentIndex, destinationIndex) => ({
  type: PlayListActionTypes.CHANGE_ORDER,
  payload: {...video, currentIndex, destinationIndex}
})

export const deleteVideo = index => ({
  type: PlayListActionTypes.DELETE_VIDEO,
  payload: index
})