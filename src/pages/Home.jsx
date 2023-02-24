import React from 'react';
import styled from 'styled-components';
import BoardList from '../components/BoardList';

const boards = [
  {
    nickName: 'sungin',
    title: '우리집 고양이',
    content: '츄르를 좋아해',
    imageUrl:
      'https://i.namu.wiki/s/4da725be7bff91a0dffdf35833cf15dc66aa381aac01c90d905d9f74bf941cb60a8343d4e2f0d56418073a9572e7381d577fbece76c1765c87b91acc0e9e4e99b30e0ca9f3614b5553b757eccebd39a841ef6baff1754f4e21af2f1edb329db7',
    createdAt: '2023-02-11T11:12:30.686',
  },
  {
    nickName: 'sungin',
    title: '우리집 고양이',
    content: '츄르를 좋아해',
    imageUrl:
      'https://i.namu.wiki/s/fe602417e5cb79f4bc238cb9f11bead3758b976bd094d24fc589fadc02d910dd81f2bdcdbab2a2f1cb5dbc96dfa441766c2349389d3debeebea4cdc2c6ec7ad9c28fdff0acb5f7423dc85b87818d2c8e96e9bb0cf8036a6e630bfe0a14a3b0c2d64f42fa0a90c07a80c29fa5b1ca8dff',
    createdAt: '2023-01-11T11:12:30.686',
  },
  {
    nickName: 'sungin',
    title: '우리집 고양이',
    content: '츄르를 좋아해',
    imageUrl:
      'https://i.namu.wiki/s/053535f99aa7fd5bc6d7ed955c37b245dcd6765959efdda25891af38998f100b2c06965f0a712dd880adfd813aaf54b26fbef114a5802bd44a0c9373db68961022ac1e262a95932061c559e9aabd85d89c23b11f8b2ad3ea198411f256f7dc60',
    createdAt: '2023-02-23T11:12:30.686',
  },
  {
    nickName: 'sungin',
    title: '우리집 고양이',
    content: '츄르를 좋아해',
    imageUrl:
      'https://i.namu.wiki/s/fe602417e5cb79f4bc238cb9f11bead3758b976bd094d24fc589fadc02d910dd81f2bdcdbab2a2f1cb5dbc96dfa441766c2349389d3debeebea4cdc2c6ec7ad9c28fdff0acb5f7423dc85b87818d2c8e96e9bb0cf8036a6e630bfe0a14a3b0c2d64f42fa0a90c07a80c29fa5b1ca8dff',
    createdAt: '023-02-24T11:12:30.686',
  },
  {
    nickName: 'sungin',
    title: '우리집 고양이',
    content: '츄르를 좋아해',
    imageUrl:
      'https://i.namu.wiki/s/fe602417e5cb79f4bc238cb9f11bead3758b976bd094d24fc589fadc02d910dd81f2bdcdbab2a2f1cb5dbc96dfa441766c2349389d3debeebea4cdc2c6ec7ad9c28fdff0acb5f7423dc85b87818d2c8e96e9bb0cf8036a6e630bfe0a14a3b0c2d64f42fa0a90c07a80c29fa5b1ca8dff',
    createdAt: '2020-04-11T11:12:30.686',
  },
  {
    nickName: 'sungin',
    title: '우리집 고양이',
    content: '츄르를 좋아해',
    imageUrl:
      'https://i.namu.wiki/s/fe602417e5cb79f4bc238cb9f11bead3758b976bd094d24fc589fadc02d910dd81f2bdcdbab2a2f1cb5dbc96dfa441766c2349389d3debeebea4cdc2c6ec7ad9c28fdff0acb5f7423dc85b87818d2c8e96e9bb0cf8036a6e630bfe0a14a3b0c2d64f42fa0a90c07a80c29fa5b1ca8dff',
    createdAt: '2020-04-11T11:12:30.686',
  },
  {
    nickName: 'sungin',
    title: '우리집 고양이',
    content: '츄르를 좋아해',
    imageUrl:
      'https://i.namu.wiki/s/fe602417e5cb79f4bc238cb9f11bead3758b976bd094d24fc589fadc02d910dd81f2bdcdbab2a2f1cb5dbc96dfa441766c2349389d3debeebea4cdc2c6ec7ad9c28fdff0acb5f7423dc85b87818d2c8e96e9bb0cf8036a6e630bfe0a14a3b0c2d64f42fa0a90c07a80c29fa5b1ca8dff',
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
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: ${props => props.theme.screen.tablet_v}) {
    border-top: 1px solid ${props => props.theme.bgBorderColor};
  }
  @media (min-width: ${props => props.theme.screen.tablet_v}) {
    border-left: 1px solid ${props => props.theme.bgBorderColor};
  }
`;
