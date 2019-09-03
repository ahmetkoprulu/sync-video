import React from 'react'
import { connect } from 'react-redux';
import { setPlaying } from '../../redux/PlayList/play-list.actions'
import './play-list-item.style.css'

const PlayListItem = ( {index, title, link, isPlaying, setPlaying} ) => {
  return (
  <div className={`playlistitem ${isPlaying ? 'bg-success' : ''}`}>
    <div className='playlistitem-title' onClick={() => setPlaying(index)}>
      { title.substring(0,27) }...
    </div>
    <div className='playlistitem-link'>
      <strong>Link:</strong> { link }
    </div>
  </div>
)}

const mapDispatchToProps = dispatch => ({
  setPlaying: index => dispatch(setPlaying(index))
})

export default connect(null, mapDispatchToProps)(PlayListItem)