export const addVideo = (state, video) => {
  return [...state.videos, video]
}

export const setNextVideo = (playing, videos) => {
  const currPlayingIndex = videos.findIndex(video => video.link===playing)
  return currPlayingIndex+1 > videos.length-1 ? null : videos[0].link
}

export const replaceVideo = (videos, index, selectedVideo ) => {
  let items = videos.filter(video => video !== selectedVideo);
  items.splice(index, 0, selectedVideo);
  return items
}

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