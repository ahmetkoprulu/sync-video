import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from "reselect";
import { selectPlayingIndex, selectVideos } from '../../redux/PlayList/play-list.selector'
import { addVideo, startFromBeginning, setPlaying } from '../../redux/PlayList/play-list.actions'
import PlayList from './play-list.component.jsx'

const mapStateToProps = createStructuredSelector({
  videos: selectVideos,
  playing: selectPlayingIndex
})

const mapDispatchToProps = dispatch => ({
  addVideo: video => dispatch(addVideo(video)),
  startFromBeginning: () => dispatch(startFromBeginning())
})

const PlayListContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(PlayList)

export default PlayListContainer
