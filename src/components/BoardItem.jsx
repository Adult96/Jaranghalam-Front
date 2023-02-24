import React from 'react';
import styled from 'styled-components';

export default function BoardItem({
  board: { nickName, title, content, imageUrl, createdAt },
}) {
  return (
    <BoardContainer>
      <div>
        <span>{nickName}</span>
        <span>{createdAt}</span>
      </div>
      <img src={imageUrl} alt='userimg' />
      <h1>{title}</h1>
      <p>{content}</p>
    </BoardContainer>
  );
}

const BoardContainer = styled.div``;
