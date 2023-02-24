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
    <>
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
    </>
  );
}

const DetailContainer = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  width: 30vw;
  min-width: 25rem;
  height: 100vh;

  @media (max-width: ${props => props.theme.screen.mobile_h}) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: ${props => props.theme.bg};
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
  border-radius: 0.5rem;
  object-fit: cover;
`;
