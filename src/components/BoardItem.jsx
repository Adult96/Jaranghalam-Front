import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import formatAgo from '../utils/date';

export default function BoardItem({
  board: { nickName, title, content, imageUrl, createdAt },
}) {
  const setDate = date => {
    return formatAgo(date);
  };

  return (
    <BoardContainer>
      <div>
        <span>{nickName}</span>
        <span>{setDate(createdAt)}</span>
      </div>
      <Img src={imageUrl} alt='userimg' />
      <AiOutlineHeart />
      <AiFillHeart />
      <h3>{title}</h3>
      <p>{content}</p>
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  width: 100%;
  height: 100%;
  :hover {
    opacity: 0.5;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 75%;
  object-fit: cover;
`;
