import React from 'react'

import './user-list-item.style.css'

const UserListItem = ({ username }) => (
  <div className='playlistitem'>
    <div className='playlistitem-title'>
      { username }
    </div>
  </div>
)

export default UserListItem