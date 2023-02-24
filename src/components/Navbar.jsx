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
        <TitleContainer>
          <AiFillInstagram />
          <TitleTextContainer>
            <span>자랑할램</span>
          </TitleTextContainer>
        </TitleContainer>
        <TabIconContainer>
          <AiFillHome />
          <AiOutlineHeart />
          <AiOutlinePlusSquare />
        </TabIconContainer>
        <BiLogIn />
      </IconContainer>
      <TextContainer>
        <span>자랑할램</span>
        <TabTextContainer>
          <span>홈</span>
          <span>좋아요</span>
          <span>추가</span>
        </TabTextContainer>
        <LoginContainer>Login</LoginContainer>
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

const TitleContainer = styled.div`
  display: flex;
`;

const TitleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Stylish', sans-serif;

  @media (min-width: ${props => props.theme.screen.tablet_v}) {
    display: none;
  }
`;

const TabIconContainer = styled.div`
  display: flex;
  margin: 10vh 0;
  gap: 3rem;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.screen.tablet_v}) {
    margin: 0;
    flex-direction: row;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Stylish', sans-serif;

  @media (max-width: 1450px) {
    display: none;
  }
`;

const TabTextContainer = styled.div`
  display: flex;
  margin: 10vh 1rem;
  gap: 4rem;
  font-size: ${props => props.theme.fontSize.large_regular};
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
`;
