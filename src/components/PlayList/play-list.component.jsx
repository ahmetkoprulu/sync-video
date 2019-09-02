import React from 'react'
import { searchFirstVideo} from '../../utils/youtube-api'
import PlayListItem from '../PlayListItem/play-list-item.component.jsx'

import './play-list.style.css'

const PlayList = ( { videos, playing, addVideo } ) => {
  const addNewVideo = async () => {
    const keyword = prompt('Search for a video:')
    const response = await searchFirstVideo(keyword)
    console.log(response)
    addVideo(response)
  }

  return (
  <div className='playlist h-100'>
    <span className='playlist-header'>
      <strong className='playlist-header'>Play List</strong> 
      <span className='icons'>
        <a href='#'><i className="fas fa-play" onClick={() => addNewVideo()}></i></a>
        <a href='#'><i className="fas fa-plus"></i></a>
      </span>
    </span>
    <div className='playlist-container'>
      {
        videos.map((video, index) => <PlayListItem key={index} {...video} />)
      }
    </div>
  </div>
)}



export default PlayList