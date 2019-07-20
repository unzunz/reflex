import React, { Component } from 'react';
import styled, {keyframes, css} from 'styled-components';
import PropTypes from 'prop-types';

import OpenCodeButton from '../OpenCodeButton';

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

const scaleUp = keyframes`
  0% { 
    opacity: 0.5;
    transform: scale(1);
    -webkit-transform: scale(1);

    @media ${device.tablet} {
      transform: scale(1.05);
      -webkit-transform: scale(1.05);
    }

   }

  100% { 
    opacity: 1; 
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
    
`;

const Card = styled.div`
  min-height: 360px;
  border-radius: 5px;
  margin: 60px 0;
  opacity: 0.5;
  
  animation: ${({ isActive }) => isActive && 
    css`${scaleUp} .5s forwards;
    `}
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: white;
  margin-bottom: 12px;
  display: block;
`;

const DemosContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const MainDemo = styled.div`
  display: flex;
  min-width: 300px;
  flex-grow: 1;
  height: 300px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,.25);
`;

const ExamplesContainer = styled.div`
  display:flex;
  flex-direction: column;
  flex: 0 1 auto;
  margin: 0 0 0 24px;

  @media ${device.mobileL} {
    margin: 24px 0 0 0;
  }
`;

const ExamplesHeader = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: white;
  margin-bottom: 12px;
  flex: 0 1 auto;
`;

const Left = styled.div``;

//TODO: Should this be in scenes/Home since it's used there?
export default class AnimationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  static propTypes = {
    title: PropTypes.string.isRequired
    // Children should be explicit props, or named something else
  };

  render() {
    const { isActive, title, mainDemo, onHover, examples} = this.props;
    return (
      <Card id={title} isActive={isActive}>
        <Title id={title}>{title}</Title>
        <DemosContainer>
          <Left>
            {onHover ?
            <MainDemo
              id={title}
              onMouseEnter={() => this.setState({ hover: true })}
              onMouseLeave={() => this.setState({ hover: false })}
            >{mainDemo(this.state.hover)}</MainDemo>
            :
            <MainDemo>{React.createElement(mainDemo)}</MainDemo>}
            <OpenCodeButton></OpenCodeButton>
          </Left>
          <ExamplesContainer>
            <ExamplesHeader>Examples</ExamplesHeader>
            <div>
              {React.createElement(examples)}
            </div>
          </ExamplesContainer>
        </DemosContainer>
      </Card>
    );
  }
}