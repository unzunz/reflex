import React, { Component } from 'react';
import styled from 'styled-components';
import LoadingLines from '../../LoadingLines'

const ExamplesContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const Box = styled.div`
  width: 180px;
  height: 180px;
  background-color: ${props => props.color || "white" }
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  margin-bottom: 18px;
`;

class LoadingExamples extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ExamplesContainer>
        <Box>
          <LoadingLines></LoadingLines>
        </Box>
        <Box color="#4f4f4f">
          <LoadingLines color="white"></LoadingLines>
        </Box>
      </ExamplesContainer>
    )
  }
}

export default {
  title: 'Loading Lines',
  mainDemo: LoadingLines,
  examples: LoadingExamples
};
