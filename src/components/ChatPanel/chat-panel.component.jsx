import React from 'react'
import { connect } from 'react-redux'
import { selectIsUsersVisible } from '../../redux/ChatPanel/chat-panel.selector'
import { toggleUsersVisibilty } from '../../redux/ChatPanel/chat-panel.actions'
import UserList from '../UserList/user-list.component.jsx'

import './chat-panel.style.css'

const ChatPanel = ( { isUsersVisible, toggleUsersVisibilty }) => (
  <div className='row'>
  <div className='chatpanel-messages col-md-12'>
    <div className="container fill">
      <div className="row chat-wrap">
        <div className={`section-wrap ${isUsersVisible ? 'col-sm-9' : 'col-sm-12'}`} id="Messages">
          <div className="row header-wrap">
            <div className="chat-header col-sm-12 header-title">
              <h4 className='pull-left'>Console</h4>
              <div className="header-button">
                <a className="btn pull-right info-btn" onClick={() => toggleUsersVisibilty()}>
                  <i className="fa fa-info-circle fa-lg icon"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row content-wrap messages">
            <div className="msg">
              <div className="media-body">
                <div className='media-info'>
                  <h5 className="media-heading">Walter White</h5>
                  <small className="pull-right time"><i className="fa fa-clock-o"></i> 12:10am</small>
                </div>
                <small className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu pulvinar
                  magna. Phasellus semper scelerisque</small>
              </div>
            </div>
          </div>
          <div className="row send-wrap">
            <div className="send-message">
              <div className="message-text">
                <textarea className="no-resize-bar form-control" rows="2" placeholder="Write a message..."></textarea>
              </div>
              <div className="send-button">
                <a className="btn">Send <i className="fa fa-send"></i></a>
              </div>
            </div>
          </div>
        </div>
        { isUsersVisible ? <UserList /> : ''}
      </div>
    </div>
  </div>
</div>
)

const mapStateToProps = state => ({
  isUsersVisible: selectIsUsersVisible(state)
})

const mapDispatchToProps = dispatch => ({
  toggleUsersVisibilty: () => dispatch(toggleUsersVisibilty())
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatPanel)