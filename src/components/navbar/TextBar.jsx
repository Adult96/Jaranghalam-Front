import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ROUTER from '../../constants/router';

export default function TextBar({ showLoginIcon, showLogOut, onLogOut }) {
  return (
    <TextContainer>
      <Title>Jaranghalam</Title>
      <TabText>
        {showLoginIcon && (
          <Home>
            <Link to="/">HOME</Link>
          </Home>
        )}
        {showLogOut && (
          <>
            <Like>LIKE</Like>
            <My>
              <Link to="/my">MY</Link>
            </My>
            <Add>ADD</Add>
          </>
        )}
      </TabText>
      <Login>
        {showLogOut && <div onClick={onLogOut}>LogOut</div>}
        {showLoginIcon && !showLogOut && (
          <Link to={ROUTER.PATH.LOGIN}>Login</Link>
        )}
        {!showLoginIcon && !showLogOut && (
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
  margin: 0 0 1rem 0.5rem;
  gap: 3.2rem;
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

const Like = styled(Home)``;

const My = styled(Home)``;

const Add = styled(Home)``;

const Login = styled.div`
  display: flex;
  margin: 0.5rem;
  font-size: ${props => props.theme.fontSize.large_regular};
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
`;
