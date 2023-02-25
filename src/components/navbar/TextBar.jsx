import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ROUTER from '../../constants/router';

export default function TextBar({ showLoginIcon, onClickLogin }) {
  return (
    <TextContainer>
      <Title>Jaranghalam</Title>
      {showLoginIcon && (
        <TabText>
          <Home>HOME</Home>
          <Like>LIKE</Like>
          <Add>ADD</Add>
        </TabText>
      )}
      <Login>
        {showLoginIcon ? (
          <Link to={ROUTER.PATH.LOGIN}>Login</Link>
        ) : (
          <Link to={ROUTER.PATH.BACK}>Back</Link>
        )}
      </Login>
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

const Title = styled.h5`
  margin: 0.5rem;
  cursor: pointer;
`;

const TabText = styled.div`
  display: flex;
  margin: 10vh 1rem;
  gap: 3rem;
  font-size: ${props => props.theme.fontSize.large_regular};
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
`;

const Home = styled.span`
  margin: 0.5rem;
  font-size: ${props => props.theme.fontSize.large_regular};
  cursor: pointer;
`;

const Like = styled.span`
  margin: 0.5rem;
  font-size: ${props => props.theme.fontSize.large_regular};
  cursor: pointer;
`;

const Add = styled.span`
  margin: 0.5rem;
  font-size: ${props => props.theme.fontSize.large_regular};
  cursor: pointer;
`;

const Login = styled.div`
  display: flex;
  margin: 0.5rem;
  font-size: ${props => props.theme.fontSize.large_regular};
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
`;
