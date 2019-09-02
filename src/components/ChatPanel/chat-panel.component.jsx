import React from 'react'

import UserList from '../UserList/user-list.component.jsx'

import './chat-panel.style.css'

const ChatPanel = () => (
  <div className='row'>
    <div className='chatpanel-messages col-md-10'>

    </div>
    <div className='chatpanel-users col-md-2'>
      <UserList />
    </div>
  </div>
)

export default ChatPanel