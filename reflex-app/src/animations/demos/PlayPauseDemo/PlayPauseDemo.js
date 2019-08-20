import React, { Component } from 'react';
import styled from 'styled-components';
import PlayPause from '../../PlayPause';
import exampleVideo from './images/forest-drone-footage.mov';

class PlayPauseDemo extends Component {
  constructor(props) {
    super(props);
    this.playPauseRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.hover) {
      this.playPauseRef.current.handleOnClick()
    }
  }

  render() {
    return (
      <PlayPause ref={this.playPauseRef}/>
    );
  }
}

const size = {
  mobileL: '462px',
  tablet: '768px',
  laptop: '1024px',
}

export const device = {
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
};

const ExamplesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Player = styled.div`
  width: 100%;
  height: 36px;
  background-color: #4F4F4F;
  border-radius: 3px;
  display: flex;
  align-items: center;
  padding: 0 6px;
  font-size: 10px;
  color: white;

  @media ${device.mobileL} {
    width: 100%;
  }
`;

const Tracker = styled.div`
  width: 270px;
  height: 1px;
  background-color: rgba(255,255,255,0.3);
  margin: 0 12px;
  text-align: right;
`;

const Progress = styled.div`
  width: 120px;
  height: 1px;
  background-color: white;
`;

const VideoPlayerContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 24px;

`;

const VideoPlayer = styled.video`
  width: 372px;
  height: 210px;
  background-color: black;
  border-radius: 3px;
`;

const PlayPause2 = styled(PlayPause)`
  z-index: 1;
  position: absolute;
  bottom: 10px;
  &::-webkit-media-controls-overlay-play-button {
    display: none;
  }
  
`;

class PlayPauseExamples extends Component {
  handleClick = () => {
    if (this.refs.vidRef.paused == true) {
      // Play the video
      this.refs.vidRef.play();
    } else {
      // Pause the video
      this.refs.vidRef.pause();
    }
  }

  render() {
    return (
      <ExamplesContainer>
        <Player>
          <PlayPause color="white" size="28px"/>
          <Tracker>
            <Progress></Progress>
          </Tracker>
          3:03
        </Player>
        <VideoPlayerContainer>
          <PlayPause2 color="white" id="play-pause" data-state="play" onClick={this.handleClick}/>
          <VideoPlayer ref="vidRef" id="video" controls  noremoteplayback>
            <source src={exampleVideo}></source>
          </VideoPlayer>
        </VideoPlayerContainer>
      </ExamplesContainer>
    )
  }
}

export default {
  title: 'Play Pause',
  mainDemo: PlayPauseDemo,
  examples: PlayPauseExamples
};