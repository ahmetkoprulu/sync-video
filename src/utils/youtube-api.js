import axios from 'axios'

const key = 'AIzaSyAbLqiu2vMTZ_Gmey-u-sbwi-dq0VWoxWQ'
const url = `https://www.googleapis.com/youtube/v3/search
              ?part=snippet
              &relatedToVideoId=9sWEecNUW-o
              &type=video
              &key=`

const youtubeConf = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/'
})

export const searchFirstVideo = async keyword => {
  const response = await youtubeConf.get('/search', {
    params: {
      part: 'snippet',
      key: 'AIzaSyAbLqiu2vMTZ_Gmey-u-sbwi-dq0VWoxWQ',
      type: 'video',
      q: keyword
    }
  })
  const { id: {videoId}, snippet: {title} } = response.data.items[0]
  return { link: videoId, title: title }
}


