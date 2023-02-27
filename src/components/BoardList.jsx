import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { __getDetail } from '../utils/redux/modules/home/getDetail';

import BoardDetail from './BoardDetail';
import BoardItem from './BoardItem';
import ROUTER from '../constants/router';

export default function BoardList({ boards }) {
  const [showDetail, setShowDetail] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { getDetail, isLoading, isError } = useSelector(
    state => state.getDetail,
  );
  const path = pathname === ROUTER.PATH.MY ? true : false;

  const handleBoardClick = boardId => {
    setShowDetail(true);
    dispatchDetail(boardId);
  };

  const handleBackClick = () => {
    setShowDetail(false);
  };

  const handleEdit = () => {};
  const handleDelete = () => {};

  const dispatchDetail = boardId => {
    dispatch(__getDetail(boardId));
  };

  if (isLoading) return <p>로딩</p>;
  if (isError) return <p>에러</p>;
  return (
    <>
      <BoardWrapper>
        <BoardContainer media={`${showDetail}`}>
          {boards.map(board => (
            <li
              key={uuidv4()}
              onClick={() => {
                handleBoardClick(board.id);
              }}
            >
              <BoardItem
                board={board}
                path={path}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </li>
          ))}
        </BoardContainer>
        {showDetail && (
          <BoardDetail board={getDetail} onBackClick={handleBackClick} />
        )}
      </BoardWrapper>
    </>
  );
}

const BoardWrapper = styled.ul`
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
`;

const BoardContainer = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;

  @media (min-width: ${props => props.theme.screen.tablet_v}) {
    ${props =>
      props.media === 'true'
        ? 'grid-template-columns: 1fr;'
        : 'grid-template-columns: 1fr 1fr;'}
  }

  @media (min-width: 1024px) {
    ${props =>
      props.media === 'true'
        ? 'grid-template-columns: 1fr 1fr '
        : 'grid-template-columns: 1fr 1fr 1fr '}
  }

  @media (min-width: 1400px) {
    ${props =>
      props.media === 'true'
        ? 'grid-template-columns: 1fr 1fr 1fr;'
        : 'grid-template-columns: 1fr 1fr 1fr 1fr;'}
  }
`;
