import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import BoardItem from './BoardItem';
import BoardSort from './BoardSort';

export default function BoardList({ boards }) {
  const [showDetail, setShowDetail] = useState({});

  const handleBoardClick = board => {
    setShowDetail(board);
  };

  return (
    <>
      <BoardSort />
      <BoardContainer>
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
    </>
  );
}

const BoardContainer = styled.ul`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  @media (min-width: ${props => props.theme.screen.mobile}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${props => props.theme.screen.tablet_v}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: ${props => props.theme.screen.tablet_h}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
