export const addVideo = (state, video) => {
  return [...state.videos, video]
}

export const setNextVideo = (playing, lenVideos) => (
  playing+1 > lenVideos-1 ? null : playing+1
)


export const deleteVideo = (videoList,index) => {
  const videos = videoList.splice(index, 1)

  if (index === 0)
    return {
      videos,
      playing: null
    }
  
  if (index === videoList.length)
    return {
      videos,
      playing: videoList.length-1
    }
  
    return {
      videos,
      playing: index
    }
}