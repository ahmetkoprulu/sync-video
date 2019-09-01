import React from 'react'

import PlayListItem from '../PlayListItem/play-list-item.component.jsx'

import './play-list.style.css'

const PlayList = () => (
  <div className='playlist h-100'>
    <span className='playlist-header'>
      <strong className='playlist-header'>Play List</strong> 
      <span className='icons'>
        <a href='#'><i class="fas fa-play"></i></a>
        <a href='#'><i class="fas fa-plus"></i></a>
      </span>
    </span>
    <div className='playlist-container h-100'>
      <PlayListItem/>
      <PlayListItem/>
      <PlayListItem/>
    </div>
  </div>
)

export default PlayList