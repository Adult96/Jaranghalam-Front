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
  );
}
