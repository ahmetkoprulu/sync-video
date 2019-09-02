import React from 'react';

import Header from './components/Header/header.component';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import PlayListContainer from './components/PlayList/play-list.container';
import ChatPanel from './components/ChatPanel/chat-panel.component.jsx'
import Player from './components/Player/player.component.jsx';


class App extends React.Component {
  componentDidMount() {
    // const username = prompt('Type Your Username:')
    
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

export default App;
