import React from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import formatAgo from '../utils/formatDate';
import formatLike from '../utils/formatLike';
import Button from '../elements/Button';

export default function BoardItem({
  board: {
    id,
    userName,
    title,
    content,
    imageUrl,
    createdAt,
    modifiedAt,
    isLiked,
    postLikeCount,
  },
  path,
  handleEdit,
  handleDelete,
}) {
  const setDate = (createDate, modifiedDate) => {
    return formatAgo(createDate, modifiedDate);
  };

  const setformatLike = cnt => {
    return formatLike(cnt);
  };

  return (
    <BoardContainer path={!path}>
      <Header>
        <HeaderTitle>
          <h3>{userName}</h3>
          <Date>{setDate(createdAt, modifiedAt)}</Date>
        </HeaderTitle>
        {path && (
          <ButtonContainer>
            <Button
              type="sort"
              click={() => {
                handleEdit(id);
              }}
            >
              수정
            </Button>
            <Button
              type="sort"
              click={() => {
                handleDelete(id);
              }}
            >
              삭제
            </Button>
          </ButtonContainer>
        )}
      </Header>
      {/* <ImageContainer> */}
      <Img src={imageUrl} alt="userimg" />
      {/* </ImageContainer> */}
      {isLiked ? (
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

  ${props =>
    props.path &&
    css`
      :hover > Img {
        opacity: 0.5;
      }
    `}
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;
  margin: 1rem 0;
`;

const Date = styled.h4`
  color: ${props => props.theme.dateColor};
`;

const HeaderTitle = styled.div`
  display: flex;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

// const ImageContainer = styled.div`
//   position: relative;
//   width: 100%;
//   height: 0;
//   padding-bottom: calc(500 / 500 * 100%);
// `;

// const Img = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   border-radius: 0.5rem;
//   background-size: cover;
// `;

const Img = styled.img`
  max-width: 100%;
  height: auto;
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
