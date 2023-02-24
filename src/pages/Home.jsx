import React from 'react';
import styled from 'styled-components';

export default function Home() {
  return (
    <HomeWrapper>
      <BoradContainer></BoradContainer>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media (max-width: ${props => props.theme.screen.tablet_v}) {
    border-top: 1px solid ${props => props.theme.bgBorderColor};
  }
  @media (min-width: ${props => props.theme.screen.tablet_v}) {
    border-left: 1px solid ${props => props.theme.bgBorderColor};
  }
`;

const BoradContainer = styled.div`
  max-width: 470px;
  width: 100%;
  height: 100%;
`;
