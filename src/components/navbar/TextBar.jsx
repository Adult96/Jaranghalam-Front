import React from 'react';
import styled from 'styled-components';

export default function TextBar() {
  return (
    <TextContainer>
      <span>Jaranghalam</span>
      <TabText>
        <span>홈</span>
        <span>좋아요</span>
        <span>추가</span>
      </TabText>
      <Login>Login</Login>
    </TextContainer>
  );
}

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Satisfy', cursive;

  @media (max-width: 1450px) {
    display: none;
  }
`;

const TabText = styled.div`
  display: flex;
  margin: 10vh 1rem;
  gap: 4rem;
  font-size: ${props => props.theme.fontSize.large_regular};
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
`;

const Login = styled.div`
  display: flex;
  margin: 0.5rem;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
`;
