import React, {Component, Fragment} from 'react';
import styled, { keyframes } from 'styled-components';
import lottie from "lottie-web";
import { Link } from 'react-scroll';
import VisibilitySensor from "react-visibility-sensor";
import ScrollingColorBackground from 'react-scrolling-color-background';
import arrow from './images/arrow-line.svg';

import animations from '../../animations';
import AnimationCard from '../../components/AnimationCard';

import * as animationData from '../../animations/LandingBG/data.json';

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

const Wrapper = styled.div`
  margin: auto;
  max-width: 80vw;
  padding: 18px;
  height: 100%;

  @media ${device.tablet} {
    max-width: 100vw;
    display: flex;
    flex-flow: column wrap;
  }
`;

const LandingContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column wrap;
  justify-content: center;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 500;
  color: #7567F7; //CONSTANT
  margin: 24px 0;

`;

const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #FF52EE; //CONSTANT
  margin-bottom: 48px;
  line-height: 1.5;
  width: 36vw;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const CTAcontainer = styled.div`
  position: relative;
`;

const CTA = styled.button`
  max-width: 180px;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 700;
  color: white;
  background-color: #FF52EE; //CONSTANT
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  
  &:hover {
    transform: translate(-1px, -1px);
  }

  &:active {
    transform: translate(3px, 3px);
  }
`;

const CTAshadow = styled.div`
  position: absolute;
  width: 150px;
  height: 37px;
  background-color: #C8ADC0;
  border-radius: 3px;
  top: 3px;
  left: 3px;
  z-index: -1;
`;


const ContentContainer = styled.div`
  display: grid; 
  grid-template-columns: 1fr 4fr;
  grid-template-rows: auto;
  grid-template-areas:
    "table carousel";
  grid-gap: 15px 20px;

  @media ${device.tablet} {
    grid-template-columns: 0 1fr;
    grid-gap: 0;
    width: 100%;
  }
`

const TableOfContents = styled.div`
  grid-area: table;
  display: flex;
  flex-direction: column;
  position: sticky;
  height: 100vh;
  margin-top: 60px;
  top: 140px;

  a {
    color: rgba(255, 255, 255, .5);
  }

  a:hover {
    cursor: pointer;
  }
  
  a.selected {
    color: white !important;
  }

  @media ${device.tablet} {
    display: none;
  }
`

const AnimationContainer = styled.div`
  grid-area: carousel;
  align-items: center;

  @media ${device.tablet} {
    width: 100%;
    display: flex;
    flex-flow: column wrap;
  }
`;

const ScrollButton = styled.button`
  background: none;
  border: none;
  color: #7567F7; //CONSTANT
  font-weight: 600;
  font-size: 14px;
  margin-top: 60px;
  padding: 0 6px 0 0;
  cursor: pointer;
`;

const move = keyframes`
  0% {
    transform: translate(0,1px) rotate(180deg);
  }

  100% {
    transform: translate(0,-3px) rotate(180deg);
  }
`;

const Arrow = styled.img`
  width: 24px;
  vertical-align: middle;
  cursor: pointer;
  animation: ${move} 1s ease-in-out infinite alternate;
`;

const Animation = styled.div`
  position: absolute;
  width: 100vw;
  z-index: -1;
  top: 0;
  left: 0;
`;

const colorTransitionStyle = {
  position: 'fixed',
  top: '0px',
  left: '0px',
  bottom: '0px',
  right: '0px',
  zIndex: '-1',
};

const linkStyle = {
  display: 'inline-block'
};

const linkStyle2 = {
  padding: '10px 0',
};

//TODO: Change to Pure Component?
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAnimation: null,
    };

    this.landingTopSectionRef = React.createRef();
    this.createAnimation = this.createAnimation.bind(this);
    this.isAnimationVisible = this.isAnimationVisible.bind(this);
  }

  isAnimationVisible = (isVisible, title) => {
    if (isVisible) {
      this.setState({
        currentAnimation: title,
      })
    }
  };

  renderAnimationCard = ({ title, render, mainDemo, onHover, examples }, key) => {
    return (
      <VisibilitySensor onChange={isVisible => this.isAnimationVisible(isVisible, title)}>
        <AnimationCard isActive={this.state.currentAnimation === title} key={key} title={title} mainDemo={mainDemo} onHover={onHover} examples={examples}/>
      </VisibilitySensor>
    );
  };

  renderAnimationLink = ({title, render, mainDemo, onHover}) => {

    return (
      <Link
        className={this.state.currentAnimation === title ? "selected" : ""}
        smooth="easeOutCubic"
        duration={1000}
        style={linkStyle2}
        offset={-70}
        to={title}>
        {title}
      </Link>
    );
  };

  createAnimation() {
   const animationParams = {
     container: this.landingTopSectionRef.current,
     loop: true,
     autoplay: true,
     animationData: animationData,
     ...this.props.animationParams,
    };

    const animation = lottie.loadAnimation(animationParams);
    return animation;
  }

  componentDidMount() {
    this.animation = this.createAnimation();
  }

  render() {
    return (
      <Wrapper>
        <ScrollingColorBackground
            selector='.js-color-stop[data-background-color]'
            colorDataAttribute='data-background-color'
            initialRgb='white'
            style={colorTransitionStyle}/>
        <Animation ref={this.landingTopSectionRef}/>
        <LandingContainer
          data-background-color='white'
          className='js-color-stop'
          >
          <section style={{ height: '20px'}} data-background-color='rgb(234, 77, 237)'  className='js-color-stop' />
          <Title> Reflex </Title>
          <Subtitle>
            Reflex motion is an animation library based in React that mirrors real-world, natural
            motion.
          </Subtitle>
          <CTAcontainer>
            <CTA>Get npm package</CTA><CTAshadow></CTAshadow>
          </CTAcontainer>
          <div>
            <Link style={linkStyle} smooth="easeOutCubic" duration={1000} to="animationsCont" >
              <ScrollButton>Scroll down to see animations</ScrollButton>
              <Arrow src={arrow}/>
            </Link>
          </div>
        </LandingContainer>
        <ContentContainer>
          <TableOfContents>
            {animations.map((animation) => this.renderAnimationLink(animation))}
          </TableOfContents>
          <AnimationContainer data-background-color='rgba(117,103,247,.25)'  className='js-color-stop' id="animationsCont">
            {animations.map((animation, index) => this.renderAnimationCard(animation, index))}
          </AnimationContainer>
        </ContentContainer>
        <div id="testfooter"/>
      </Wrapper>
    );
  }
}
