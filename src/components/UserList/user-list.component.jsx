import React from 'react'
import { connect } from 'react-redux'
import { selectUsers } from '../../redux/UserList/user-list.selector'
import UserListItem from "../UserListItem/user-list-item.component";

import './user-list.style.css'

const UserList = ( { users } ) => (
  <div className="col-sm-3 section-wrap" id="Members">
    <div className="row header-wrap">
      <div className="chat-header col-sm-12">
        <h4>Users</h4>
        <div className="header-button">
          <a className="btn pull-right info-btn">
            <i className="fa fa-close"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="row content-wrap">
      {
        users.map(user => <UserListItem username={user} />)
      }
    </div>
  </div>
)

const mapStateToProps = state => ({
  users: selectUsers(state),
})

export default connect(mapStateToProps)(UserList)