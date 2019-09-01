import { PlayListActionTypes } from './play-list.type.js'

export const addVideo = video => ({
  type: PlayListActionTypes.ADD_VIDEO,
  payload: video
})