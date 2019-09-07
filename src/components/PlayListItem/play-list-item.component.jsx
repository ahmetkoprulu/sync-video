import React from 'react'
import { connect } from 'react-redux';
import { setPlaying } from '../../redux/PlayList/play-list.actions'
import './play-list-item.style.css'

const PlayListItem = ({index, title, link, isPlaying, setPlaying, onDragStart, onDragOver, onDragEnd }) => 
  (<div className={`playlistitem ${isPlaying ? 'bg-success' : ''}`} 
      onDragOver={() => onDragOver(index)}>
      <div className='dragIcon'
        onDragStart={e => onDragStart(e, index)}
        onDragEnd={onDragEnd}
        draggable>
        <i class="fas fa-bars"></i>
      </div>
      <div className='' onClick={() => setPlaying(link)}>
        <div className='playlistitem-title' >
          { title.substring(0,29) }...
        </div>
        <div className='playlistitem-link'>
          <strong>Link:</strong> { link }
        </div>
      </div>
    </div>)


const mapDispatchToProps = dispatch => ({
  setPlaying: link => dispatch(setPlaying(link))
})

export default connect(null, mapDispatchToProps)(PlayListItem)