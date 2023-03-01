import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { __getDetail } from '../utils/redux/modules/home/getDetail';

import BoardDetail from './BoardDetail';
import BoardItem from './BoardItem';
import ROUTER from '../constants/router';
import { deleteBoard } from '../utils/api/myBoard';
import { __getMy } from '../utils/redux/modules/my/getMy';
import ContentAdd from './ContentAdd';

export default React.memo(function BoardList({ boards }) {
  const [showDetail, setShowDetail] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalPostId, setModalPostId] = useState(null);

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { getDetail, isLoading, isError } = useSelector(
    state => state.getDetail,
  );
  const path = pathname === ROUTER.PATH.MY ? true : false;

  const handleBoardClick = async (e, boardId) => {
    const innerText = e.target.innerText;
    if (innerText === '수정' || innerText === '삭제') return;
    await dispatchDetail(boardId);
    setShowDetail(true);
  };

  const handleBackClick = () => {
    setShowDetail(false);
  };

  const dispatchDetail = async boardId => {
    await dispatch(__getDetail(boardId));
  };

  const handleEdit = postid => {
    setModalPostId(postid);
    handleShowModal();
  };

  const handleDelete = async postid => {
    await deleteBoard(postid);
    dispatch(__getMy());
  };

  const handleShowModal = () => {
    setShowModal(state => !state);
  };

  return (
    <>
      <BoardWrapper>
        <BoardContainer>
          {boards.map((board, index) => (
            <Li
              key={uuidv4()}
              media={`${showDetail}`}
              onClick={e => {
                handleBoardClick(e, board.id);
              }}
            >
              <BoardItem
                board={board}
                path={path}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </Li>
          ))}
        </BoardContainer>
        {showDetail && (
          <BoardDetail
            board={getDetail}
            path={path}
            onBackClick={handleBackClick}
          />
        )}
      </BoardWrapper>
      {showModal && (
        <ContentAdd
          toggleModal={handleShowModal}
          edit={true}
          postId={modalPostId}
        />
      )}
    </>
  );
});

const BoardWrapper = styled.ul`
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
`;

const BoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  /* grid-template-columns: repeat(auto-fit, minmax(40%, auto)); */
`;

const Li = styled.li`
  width: 100%;

  @media (min-width: 600px) {
    ${props => (props.media === 'true' ? ' width: 100%;' : ' width: 48%;')}
  }

  @media (min-width: 800px) {
    ${props => (props.media === 'true' ? ' width: 100%;' : ' width: 48%;')}
  }

  @media (min-width: 1024px) {
    ${props => (props.media === 'true' ? ' width: 100%; ' : ' width: 32%;')}
  }

  @media (min-width: 1200px) {
    ${props => (props.media === 'true' ? ' width: 48%; ' : ' width: 32%;')}
  }

  @media (min-width: 1400px) {
    ${props => (props.media === 'true' ? ' width: 48%;' : ' width: 32.4%;')}
  }

  @media (min-width: 1600px) {
    ${props => (props.media === 'true' ? ' width: 31%;' : ' width: 24%;')}
  }
`;
