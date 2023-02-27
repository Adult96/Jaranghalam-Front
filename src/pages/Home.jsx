<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ContentAdd from './ContentAdd';
import { StModalBackground, StModalContainer } from './ContentAdd';

// const TestBg = styled.div`
//   background: url('https://i.imgur.com/SvyQWWU.jpg');
//   background-size: cover;
//   background-repeat: no-repeat;
//   width: 100vw;
//   height: 100vh;
//   overflow: hidden;
// `;

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const ModalHandler = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <button onClick={ModalHandler}> 모달버튼</button>
      {showModal ? <ContentAdd toggleModal={ModalHandler} /> : null}
    </>
=======
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import BoardList from '../components/BoardList';
import { __getHome } from '../utils/redux/modules/home/getHome';

export default function Home() {
  const dispatch = useDispatch();
  const { getHome, isLoading, isError } = useSelector(state => state.getHome);

  useEffect(() => {
    dispatch(__getHome());
  }, [dispatch]);

  if (isLoading) return <p>로딩</p>;
  if (isError) return <p>에러</p>;
  return (
    <HomeWrapper>
      <BoardList boards={getHome} />
    </HomeWrapper>
>>>>>>> origin/main
  );
}

const HomeWrapper = styled.main`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      0deg,
      rgba(88, 81, 216, 1) 0%,
      rgba(131, 58, 180, 1) 10%,
      rgba(193, 53, 132, 1) 20%,
      rgba(225, 48, 108, 1) 30%,
      rgba(253, 36, 76, 1) 40%,
      #f56040 50%,
      rgba(247, 119, 55, 1) 60%,
      #fcaf45 70%,
      #ffdc80 80%
    );
    border-radius: 6px;
  }

  @media (max-width: ${props => props.theme.screen.tablet_v}) {
    border-top: 1px solid ${props => props.theme.bgBorderColor};
  }
  @media (min-width: ${props => props.theme.screen.tablet_v}) {
    border-left: 1px solid ${props => props.theme.bgBorderColor};
  }
`;
