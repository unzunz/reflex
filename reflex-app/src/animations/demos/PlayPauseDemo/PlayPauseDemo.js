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
  margin-top: 24px;
`;

const VideoPlayer = styled.video`
  width: 372px;
  height: 210px;
  background-color: black;
  border-radius: 3px;
`;

class PlayPauseExamples extends Component {

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
          <VideoPlayer id="video" controls autoPlay>
            <source src={exampleVideo}></source>
            <PlayPause id="play-pause" data-state="play"/>
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