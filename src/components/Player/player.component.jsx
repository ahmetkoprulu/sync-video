import React from 'react'
import YouTube from 'react-youtube'

import './player.style.css'

const opts = {
  height: '500',
  width: '100%'
}

const Player = () => (
  <YouTube
      videoId="9sWEecNUW-o"
      opts={opts}
    />
)

export default Player