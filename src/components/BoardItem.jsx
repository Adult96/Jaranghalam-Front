import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import formatAgo from '../utils/formatDate';
import formatLike from '../utils/formatLike';

export default function BoardItem({
  board: { userName, title, content, imageUrl, createdAt, like, postLikeCount },
}) {
  const setDate = date => {
    return formatAgo(date);
  };

  const setformatLike = cnt => {
    return formatLike(cnt);
  };

  return (
    <BoardContainer>
      <Header>
        <h3>{userName}</h3>
        <Date>{setDate(createdAt)}</Date>
      </Header>
      <Img src={imageUrl} alt="userimg" />
      {like ? (
        <HeartEmpty>
          <AiFillHeart />
        </HeartEmpty>
      ) : (
        <Heart>
          <AiOutlineHeart />
        </Heart>
      )}
      <Like>{setformatLike(postLikeCount)}</Like>
      <Title>{`${userName} ${title}`}</Title>
      <Content>{content}</Content>
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 37rem;
  min-height: 25rem;
  border-bottom: 1px solid ${props => props.theme.borderColor};

  :hover > Img {
    opacity: 0.5;
  }
`;

const Header = styled.div`
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
  background-size: cover;
`;

const Like = styled.h4`
  margin: 1rem 0;
`;

const Title = styled.h4`
  display: -webkit-box;

  height: 1.08rem;
  white-space: normal;
  -webkit-line-clamp: 1; /* 텍스트를 자를 때 원하는 단위 ex) 3줄 */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Content = styled.p`
  display: -webkit-box;

  white-space: normal;
  -webkit-line-clamp: 2; /* 텍스트를 자를 때 원하는 단위 ex) 3줄 */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Heart = styled.div`
  margin-top: 1rem;
  font-size: ${props => props.theme.fontSize.medium};
`;

const HeartEmpty = styled(Heart)`
  color: ${props => props.theme.color.red};
`;
