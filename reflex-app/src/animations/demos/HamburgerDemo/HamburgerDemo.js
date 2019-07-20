import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Hamburger from '../../Hamburger';
import feedPlaceholder from './images/feed-placeholder.png';

class HamburgerDemo extends Component {
  constructor(props) {
    super(props);
    this.burgerRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.hover) {
      this.burgerRef.current.handleOnClick()
    }
  }

  render() {
    return (
      <Hamburger ref={this.burgerRef}/>
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
  flex-flow: column wrap;
  align-items: start;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 12px;
`;

const HamburgerBox = styled.div.attrs({
  style: ({ background }) => ({ background: background})
})`
  width: 60px;
  height: 60px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  display: flex;
  align-items: center; 
  justify-content: center;
  position: relative;
`;

const Feed = styled.div`
  position: relative;
  background-color: #F2F2F2;
  margin-top: 18px;
  border-radius: 3px;
  height: 230px;
  width: 250px;
  padding: 18px 24px;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const Date = styled.span`
  margin-top: 12px;
  font-size: 10px;
`;

const Skeleton = styled.img`
  width: 202px;
  height: auto;
  margin-top: 12px;
`;

const testAnimation = keyframes`
    0% {
      opacity: 0;
      top: 250px;
      //transform:  translate(0px, 250px)  ; // This achieves the same effect 
    }
    100% {
      opacity: 1;
      top: 0px;
      //transform:  translate(0px,0px)  ;
      
    }
`

const Menu = styled.div`
  right: 0;
  background: black;
  height: 100%;
  width: 100%;
  z-index: 1;
  position: absolute;
  
`;

const HamburgerWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  z-index: 2;
`

const HeaderContainer = styled.div`
  display:flex;
  flex-direction: column;
`;

// const HamburgerTest = Hamburger.attrs(({width}) => ({ width: width }));

class HamburgerExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuClicked: false,
      isMenuExpanded: false
    }; 

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
    this.setState({
      isMenuClicked: true,
      isMenuExpanded: !this.state.isMenuExpanded
    })
  }
  render() {
    return (
      <ExamplesContainer>
        <Grid>
          <HamburgerBox background={'#FFFFFF'}>
            <Hamburger/>
          </HamburgerBox>
          <HamburgerBox background={'#4F4F4F'}>
            <Hamburger/>
          </HamburgerBox>
          <HamburgerBox background={'#111111'}>
            <Hamburger/>
          </HamburgerBox>
          <HamburgerBox background={'#FFFFFF'}>
            <Hamburger/>
          </HamburgerBox>
        </Grid>
        <Feed>
          <HamburgerWrapper>
            <Hamburger width="40px" onClick={this.handleOnClick}/>
          </HamburgerWrapper>
          <HeaderContainer>
            <Title>Good Morning!</Title>
            <Date>Sunday, May 5</Date>
          </HeaderContainer>
          <Skeleton src={feedPlaceholder}/>
          <Skeleton src={feedPlaceholder}/>
          {this.state.isMenuClicked &&  <Menu isToggled={this.state.isMenuExpanded}> test </Menu>}
        </Feed>
      </ExamplesContainer>
    );
  }
}

export default {
  title: 'Hamburger',
  mainDemo: HamburgerDemo,
  examples: HamburgerExamples,
};