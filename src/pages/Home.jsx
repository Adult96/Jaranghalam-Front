import React from 'react';
import styled from 'styled-components';
import BoardList from '../components/BoardList';

const boards = [
  {
    nickName: 'sungin',
    title: '우리집 고양이',
    content: '츄르를 좋아해',
    imageUrl: '고양이',
    createdAt: '2020-04-11T11:12:30.686',
  },
  {
    nickName: 'sungin',
    title: '우리집 고양이',
    content: '츄르를 좋아해',
    imageUrl: '고양이',
    createdAt: '2020-04-11T11:12:30.686',
  },
  {
    nickName: 'sungin',
    title: '우리집 고양이',
    content: '츄르를 좋아해',
    imageUrl: '고양이',
    createdAt: '2020-04-11T11:12:30.686',
  },
  {
    nickName: 'sungin',
    title: '우리집 고양이',
    content: '츄르를 좋아해',
    imageUrl: '고양이',
    createdAt: '2020-04-11T11:12:30.686',
  },
  {
    nickName: 'sungin',
    title: '우리집 고양이',
    content: '츄르를 좋아해',
    imageUrl: '고양이',
    createdAt: '2020-04-11T11:12:30.686',
  },
  {
    nickName: 'sungin',
    title: '우리집 고양이',
    content: '츄르를 좋아해',
    imageUrl: '고양이',
    createdAt: '2020-04-11T11:12:30.686',
  },
  {
    nickName: 'sungin',
    title: '우리집 고양이',
    content: '츄르를 좋아해',
    imageUrl: '고양이',
    createdAt: '2020-04-11T11:12:30.686',
  },
];

export default function Home() {
  return (
    <HomeWrapper>
      <BoardList boards={boards} />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main`
  width: 100%;
  height: 100%;

  @media (max-width: ${props => props.theme.screen.tablet_v}) {
    border-top: 1px solid ${props => props.theme.bgBorderColor};
  }
  @media (min-width: ${props => props.theme.screen.tablet_v}) {
    border-left: 1px solid ${props => props.theme.bgBorderColor};
  }
`;
