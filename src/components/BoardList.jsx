import React, { useCallback, useRef, useState } from 'react';
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

export default React.memo(function BoardList({ boards }) {
  const [showDetail, setShowDetail] = useState(false);
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

  const handleEdit = postid => {};

  const handleDelete = async postid => {
    await deleteBoard(postid);
    dispatch(__getMy());
  };

  return (
    <>
      <BoardWrapper>
        <BoardContainer media={`${showDetail}`}>
          {boards.map(board => (
            <li
              key={uuidv4()}
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
            </li>
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
