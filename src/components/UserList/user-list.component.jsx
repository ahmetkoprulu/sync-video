import React from 'react'

import UserListItem from "../UserListItem/user-list-item.component";

import './user-list.style.css'

const UserList = () => (
  <div className='userlist'>
    <span className='playlist-header'>
      <strong className='playlist-header'>Users</strong> 
    </span>
    <div className='playlist-container h-100'>
      <UserListItem username={"sa"}/>
    </div>
  </div>
)

export default UserList