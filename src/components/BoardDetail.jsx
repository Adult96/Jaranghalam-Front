import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import formatAgo from '../utils/date';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Button from '../elements/Button';
import Comment from './Comment';

export default function BoardDetail({
  board: { nickName, title, content, imageUrl, createdAt },
  comment,
  onBackClick,
}) {
  const [showComment, setShowComment] = useState(false);

  const setDate = date => {
    return formatAgo(date);
  };

  const handleShowComment = () => {
    setShowComment(state => !state);
  };

  useEffect(() => {
    return () => setShowComment(false);
  }, [title, content, imageUrl, createdAt]);

  return (
    <>
      <DetailContainer>
        <Header>
          <TitleText>
            <h3>{nickName}</h3>
            <Date>{setDate(createdAt)}</Date>
          </TitleText>
          <Button width='4rem' height='1.5rem' type='sort' click={onBackClick}>
            Back
          </Button>
        </Header>
        <Img src={imageUrl} alt='userimg' />
        <AiOutlineHeart />
        <AiFillHeart />
        <p>{`좋아요 ${10}개`}</p>
        <Title>{`${nickName} ${title}`}</Title>
        <Content>{content}</Content>
        <Button click={handleShowComment} height='1.5rem' type='sort'>
          {showComment ? `댓글 가리기` : `댓글 ${10}개 모두보기`}
        </Button>
        {showComment && <Comment comment={comment} loginName={nickName} />}
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
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  @media (max-width: ${props => props.theme.screen.mobile_h}) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: ${props => props.theme.bg};
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;
  margin: 1rem 0;
`;

const TitleText = styled.div`
  display: flex;
  gap: 0.3rem;
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

const Title = styled.h4`
  display: -webkit-box;

  height: 1.08rem;
  white-space: normal;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Content = styled.p`
  display: -webkit-box;

  white-space: normal;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
