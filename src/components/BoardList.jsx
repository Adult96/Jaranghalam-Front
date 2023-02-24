import React from 'react';
import styled from 'styled-components';
import BoardItem from './BoardItem';

export default function BoardList({ boards }) {
  return (
    <BoardContainer>
      {boards.map(board => (
        <li>
          <BoardItem board={board} />
        </li>
      ))}
    </BoardContainer>
  );
}

const BoardContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
