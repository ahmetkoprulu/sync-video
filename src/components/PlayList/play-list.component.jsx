import React from 'react'
import { searchFirstVideo} from '../../utils/youtube-api'
import PlayListItem from '../PlayListItem/play-list-item.component.jsx'

import './play-list.style.css'

class PlayList extends React.Component {  
  addNewVideo = async () => {
    
    const keyword = prompt('Search for a video:')
    const response = await searchFirstVideo(keyword)
    console.log(response)
    this.props.addVideo(response)
  }

  onDragStart = (e, index) => {
    const { selectVideoByIndex } = this.props
    this.draggedItem = selectVideoByIndex(index)
    console.log(this.draggedItem);
    e.dataTransfer.effectAllowed = "move"
    e.dataTransfer.setData("text/html", e.target.parentNode)
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20)
  }
  
  onDragOver = (index) => {
    const { selectVideoByIndex, videoDragOver } = this.props
    const draggedOverItem = selectVideoByIndex(index)
    console.log(draggedOverItem);
    if (this.draggedItem === draggedOverItem)
      return
    console.log(this.draggedItem);
    videoDragOver(index, this.draggedItem)
  }

  onDragEnd = () => this.draggedIdx = null
  
  render() {
  const { videos, playing, startFromBeginning} = this.props
    return (
      <div className='playlist h-100'>
      <span className='playlist-header'>
          <strong className='playlist-header'>Play List</strong> 
          <span className='icons'>
            <a href='#'><i className="fas fa-play" onClick={() => startFromBeginning()}></i></a>
            <a href='#'><i className="fas fa-plus" onClick={() => this.addNewVideo()}></i></a>
          </span>
        </span>
        <div className='playlist-container'>
          {
            videos.map((video, index) => 
              <PlayListItem key={video.link} index={index}
                isPlaying={playing===video.link} 
                onDragStart={this.onDragStart}
                onDragOver={this.onDragOver}
                onDragEnd={this.onDragEnd}
                {...video} />)
          }
        </div>
      </div>)
  }
}



export default PlayList