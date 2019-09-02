import React from 'react'

import './play-list-item.style.css'

const PlayListItem = ( { title, link} ) => (
  <div className='playlistitem'>
    <div className='playlistitem-title'>
      { title.substring(0,27) }...
    </div>
    <div className='playlistitem-link'>
      <strong>Link:</strong> { link }
    </div>
  </div>
)

export default PlayListItem