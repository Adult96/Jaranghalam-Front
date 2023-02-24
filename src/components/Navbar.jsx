import React from 'react';
import styled from 'styled-components';
import {
  AiFillInstagram,
  AiFillHome,
  AiOutlineHeart,
  AiOutlinePlusSquare,
} from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';

export default function Navbar() {
  return (
    <NavbarContainer>
      <IconContainer>
        <Title>
          <AiFillInstagram />
          <TitleText>
            <span>Jaranghalem</span>
          </TitleText>
        </Title>
        <TabIcon>
          <AiFillHome />
          <AiOutlineHeart />
          <AiOutlinePlusSquare />
        </TabIcon>
        <BiLogIn />
      </IconContainer>
      <TextContainer>
        <span>Jaranghalem</span>
        <TabText>
          <span>홈</span>
          <span>좋아요</span>
          <span>추가</span>
        </TabText>
        <Login>Login</Login>
      </TextContainer>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  display: flex;
  margin: 2rem 1rem 1rem 1rem;
  font-size: ${props => props.theme.fontSize.large_medium};

  @media (max-width: 1450px) {
    justify-content: center;
    margin: 1rem;
    font-size: ${props => props.theme.fontSize.large};
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.screen.tablet_v}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: ${props => props.theme.fontSize.medium};
  }
`;

const Title = styled.div`
  display: flex;
`;

const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Satisfy', cursive;

  @media (min-width: ${props => props.theme.screen.tablet_v}) {
    display: none;
  }
`;

const TabIcon = styled.div`
  display: flex;
  margin: 10vh 0;
  gap: 3rem;
  flex-direction: column;

  @media (max-width: ${props => props.theme.screen.tablet_v}) {
    margin: 0;
    flex-direction: row;
  }
`;

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
