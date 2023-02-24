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
      <Title>
        <h3>{nickName}</h3>
        <Date>{setDate(createdAt)}</Date>
      </Title>
      <Img src={imageUrl} alt='userimg' />
      <AiOutlineHeart />
      <AiFillHeart />
      <p>{`좋아요 ${10}개`}</p>
      <h4>{`${nickName} ${title}`}</h4>
      <p>{content}</p>
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${props => props.theme.borderColor};

  :hover > Img {
    opacity: 0.5;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin: 1rem 0;
`;

const Date = styled.h4`
  color: ${props => props.theme.dateColor};
`;

const Img = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`;
