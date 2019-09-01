import React from 'react';

import Header from './components/Header/header.component';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import PlayList from './components/PlayList/play-list.component';
import ChatPanel from './components/ChatPanel/chat-panel.component.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <div className='row h-100'>
          <div className='col-md-9'>
            <div className='container bg-info h-100'>
            </div>
          </div>
          <div className='col-md-3 h-100'>
            <PlayList />
            <div>sas</div>
          </div>
        </div>
        <ChatPanel />
      </div>
    </div>
  );
}

export default App;
