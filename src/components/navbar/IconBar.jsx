import React, { useState } from 'react';
import styled from 'styled-components';

import {
  AiFillInstagram,
  AiFillHome,
  AiOutlineHeart,
  AiOutlinePlusSquare,
  AiOutlineUser,
} from 'react-icons/ai';
import { BiLogIn, BiArrowBack } from 'react-icons/bi';
import { MdContactPage } from 'react-icons/md';

import { Link } from 'react-router-dom';

import ROUTER from '../../constants/router';
import ContentAdd from '../../pages/ContentAdd';

export default function IconBar({ showLoginIcon, showLogOut, onLogOut }) {
  const [showModal, setShowModal] = useState(false);
  const ModalHandler = () => {
    setShowModal(prev => !prev);
  };
  return (
    <IconContainer>
      <Title>
        <AiFillInstagram id="Jaranghalem" />
        <TitleText>
          <span>Jaranghalam</span>
        </TitleText>
      </Title>
      <TabIcon>
        {showLoginIcon && (
          <Home id="홈">
            <Link to="/">
              <AiFillHome />
            </Link>
          </Home>
        )}
        {showLogOut && (
          <>
            <Like id="좋아요">
              <AiOutlineHeart />
            </Like>
            <My>
              <Link to="/my">
                <MdContactPage />
              </Link>
            </My>
            <Add id="추가">
              <AiOutlinePlusSquare />
            </Add>
          </>
        )}
        {showModal ? <ContentAdd toggleModal={ModalHandler} /> : null}
      </TabIcon>
      <Login>
        {showLogOut && <BiLogIn onClick={onLogOut} />}
        {showLoginIcon && !showLogOut && (
          <Link to={ROUTER.PATH.LOGIN}>
            <AiOutlineUser />
          </Link>
        )}
        {!showLoginIcon && !showLogOut && (
          <Link to={ROUTER.PATH.BACK}>
            <BiArrowBack />
          </Link>
        )}
      </Login>
    </IconContainer>
  );
}

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

const Home = styled.span`
  cursor: pointer;
`;

const Like = styled(Home)``;

const My = styled(Home)``;

const Add = styled(Home)``;

const Login = styled(Home)``;
