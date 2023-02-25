import React from 'react';
import styled from 'styled-components';

import {
  AiFillInstagram,
  AiFillHome,
  AiOutlineHeart,
  AiOutlinePlusSquare,
} from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';

export default function IconBar({ onClickLogin }) {
  return (
    <IconContainer>
      <Title>
        <AiFillInstagram id='Jaranghalem' />
        <TitleText>
          <span>Jaranghalam</span>
        </TitleText>
      </Title>
      <TabIcon>
        <AiFillHome id='홈' />
        <AiOutlineHeart id='좋아요' />
        <AiOutlinePlusSquare id='추가' />
      </TabIcon>
      <BiLogIn id='Login' onClick={onClickLogin} />
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
