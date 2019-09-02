import { createSelector } from 'reselect'

const selectPlayList = state => state.playList

export const selectVideos = createSelector(
  [selectPlayList],
  playList => playList.videos
)

export const selectPlayingIndex = createSelector(
  [selectPlayList],
  playList => playList.playing
)