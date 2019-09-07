import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from "reselect";
import { selectPlayingIndex, selectVideos, selectVideoByIndex } from '../../redux/PlayList/play-list.selector'
import { addVideo, startFromBeginning, setPlaying, videoDragOver } from '../../redux/PlayList/play-list.actions'
import PlayList from './play-list.component.jsx'

const mapStateToProps = state =>({
  videos: selectVideos(state),
  playing: selectPlayingIndex(state),
  selectVideoByIndex: index => selectVideoByIndex(index)(state)
})

const mapDispatchToProps = dispatch => ({
  addVideo: video => dispatch(addVideo(video)),
  startFromBeginning: () => dispatch(startFromBeginning()),
  videoDragOver: (index, selectedVideo) => dispatch(videoDragOver(index, selectedVideo))
})

const PlayListContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(PlayList)

export default PlayListContainer
