import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';

export default function BoardSort({ click, children: { content } }) {
  return (
    <BoardListSort>
      <Button click={click} width="6rem" height="1.5rem" type="sort">
        {content.first}
      </Button>
      <Button click={click} width="6rem" height="1.5rem" type="sort">
        {content.second}
      </Button>
    </BoardListSort>
  );
}

const BoardListSort = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  height: 4rem;
  background-color: ${props => props.theme.navbarBg};
  gap: 1rem;
  margin: 1rem 0rem 0rem 1rem;
  z-index: 100;
`;
