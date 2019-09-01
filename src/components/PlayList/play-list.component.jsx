import React from 'react'

import PlayListItem from '../PlayListItem/play-list-item.component.jsx'

import './play-list.style.css'

const PlayList = () => (
  <div className='playlist h-100'>
    <span className='playlist-header'>
      <strong className='playlist-header'>Play List</strong> 
      <a href='#'> Add Video</a>
    </span>
    <div className='playlist-container h-100'>
      <PlayListItem/>
      <PlayListItem/>
      <PlayListItem/>
    </div>
  </div>
)

export default PlayList