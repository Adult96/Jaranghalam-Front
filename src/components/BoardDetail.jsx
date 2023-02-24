import React from 'react';
import styled from 'styled-components';
import formatAgo from '../utils/date';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export default function BoardDetail({
  board: { nickName, title, content, imageUrl, createdAt },
}) {
  const setDate = date => {
    return formatAgo(date);
  };

  return (
    <DetailContainer>
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
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: aqua;
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
  border-radius: 0.5rem;
  object-fit: cover;
`;
