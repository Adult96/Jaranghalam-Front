import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import BoardDetail from './BoardDetail';

import BoardItem from './BoardItem';
import BoardSort from './BoardSort';

export default function BoardList({ boards }) {
  const [showDetail, setShowDetail] = useState(false);
  const [detailData, setDetailData] = useState({});

  const handleBoardClick = board => {
    setShowDetail(true);
    setDetailData({ ...board });
  };

  const handleBackClick = () => {
    setShowDetail(false);
  };

  return (
    <>
      <BoardSort />
      <BoardWrapper>
        <BoardContainer media={`${showDetail}`}>
          {boards.map(board => (
            <li
              key={uuidv4()}
              onClick={() => {
                handleBoardClick(board);
              }}
            >
              <BoardItem board={board} />
            </li>
          ))}
        </BoardContainer>
        {showDetail && (
          <BoardDetail board={detailData} onBackClick={handleBackClick} />
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
