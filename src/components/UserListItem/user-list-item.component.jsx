import React from 'react'
import { connect } from 'react-redux'
import { selectCurrentUser } from '../../redux/UserList/user-list.selector'
import './user-list-item.style.css'

const UserListItem = ({ username, currentUser }) => (

  <div className={`contact ${username === currentUser ? 'current-user' : '' }`}>
    <div className="media-body">
      <h5 className="media-heading">{ username }</h5>
      <small className="pull-left time"><i>Owner</i></small>
    </div>
  </div>
)
const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})

export default connect(mapStateToProps)(UserListItem)