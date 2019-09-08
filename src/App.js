import React from 'react';
import { connect } from 'react-redux'
import { setCurrentUser, joinRoom} from './redux/UserList/user-list.action'

import Header from './components/Header/header.component';
import PlayListContainer from './components/PlayList/play-list.container';
import ChatPanel from './components/ChatPanel/chat-panel.component.jsx'
import Player from './components/Player/player.component.jsx';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  componentDidMount() {
    const { joinRoom, setCurrentUser } = this.props
    // const username = prompt('Type Your Username:')
    
    joinRoom('desyRose')
    setCurrentUser('desyRose')
  }

  render() {
    return(
      <div className="App">
        <Header/>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9'>
              <Player />
            </div>
            <div className='col-md-3'>
              <PlayListContainer />
            </div>
          </div>
          <ChatPanel />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  joinRoom: user => dispatch(joinRoom(user))
})

export default connect(null, mapDispatchToProps)(App);
