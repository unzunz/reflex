import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import githubLogo from './images/github.png';
import githubLogoWhite from './images/github-white.png';
import reflexLogo from './images/reflex-logo.png';
import reflexLogoWhite from './images/reflex-logo-white.png';

// TODO Make media queries into global styles
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

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80vw;
  height: 60px;
  grid-area: nav;
  margin: auto;

  @media ${device.tablet} {
    max-width: 100vw;
  }
`;

const Left = styled.a`
  display: flex;
  align-items: center;
  padding-left: 18px;
`;

const ReflexLogo = styled.img`
  width: 24px;
  height: auto;
  margin-right: 12px;
`;

const Right = styled.div`
  grid-template-columns: 1fr 1fr;
  display: flex;
  align-items: center;

  @media ${device.mobileL} {
    padding: 12px;
  }
`;

const purpleStyle = {
  color: '#7567F7'
};

const whiteStyle = {
  color: 'white'
};

const NavItem = styled.a`
  padding: 12px 15px;
  text-align: center;
  // color: ${props => props.theme.purple};
  color: #7567F7;
  font-size: 14px;
  font-weight: 500;
  border-radius: 3px;

  :hover {
    background-color: rgba(117,103,247,.15)
  }
`;

const GithubLogo = styled.img`
  width: 16px;
  height: auto;
  margin: -1px 6px 0 0;
  vertical-align: middle;
`;

// //TODO: Change to Pure Component?
export default class NavigationBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isTop: true
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 30;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }

  render() {
    return (
      <Container>
        <Nav>
          <Left href="">
            <ReflexLogo src={ this.state.isTop ? reflexLogo : reflexLogoWhite } alt="reflex-logo" id="yo"/>
          </Left>
          <Right>
            <NavItem href="" style={ this.state.isTop ? purpleStyle : whiteStyle }>Getting Started</NavItem>
            <NavItem href="https://github.com/gracesnoh/reflex" target="_blank" rel="noopener noreferrer"
            style={ this.state.isTop ? purpleStyle : whiteStyle }>
              <GithubLogo src={ this.state.isTop ? githubLogo : githubLogoWhite} alt="github-logo"/>View on Github
            </NavItem>
          </Right>
        </Nav>
      </Container>
    );
  }
}