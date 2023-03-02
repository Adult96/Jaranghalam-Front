import React, { useState } from 'react';
import styled from 'styled-components';
import formatAgo from '../utils/formatDate';

import { v4 as uuidv4 } from 'uuid';
import BoardDetail from './BoardDetail';
import { useDispatch, useSelector } from 'react-redux';
import { __getDetail } from '../utils/redux/modules/home/getDetail';

export default function MyCommentList({ myComment }) {
  const [showDetail, setShowDetail] = useState(false);
  const dispatch = useDispatch();

  const { getDetail, isLoading, isError } = useSelector(
    state => state.getDetail,
  );

  const handleBackClick = () => {
    setShowDetail(false);
  };

  const handleCommentClick = async postId => {
    await dispatch(__getDetail(postId));
    await setShowDetail(true);
  };

  const setDate = (createDate, modifiedDate) => {
    return formatAgo(createDate, modifiedDate);
  };

  return (
    <MyCommentWrapper>
      <CommentContainer>
        {myComment.map(v => (
          <Comment
            key={uuidv4()}
            onClick={e => {
              handleCommentClick(v.postId);
            }}
          >
            <Title>
              <span>{v.userNickName}</span>{' '}
              <span>{setDate(v.createdAt, v.modifiedAt)}</span>
            </Title>
            <Content>{v.content}</Content>
          </Comment>
        ))}
      </CommentContainer>
      {showDetail && (
        <BoardDetail
          board={getDetail}
          path={true}
          onBackClick={handleBackClick}
        />
      )}
    </MyCommentWrapper>
  );
}

const MyCommentWrapper = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: auto;
`;

const CommentContainer = styled.div`
  width: 60%;

  @media (min-width: ${props => props.theme.screen.mobile_h}) {
    width: 100%;
  }
`;

const Comment = styled.li`
  display: flex;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${props => props.theme.bg};
  box-shadow: 15px 15px 30px ${props => props.theme.shadowColorTop},
    -15px -15px 30px ${props => props.theme.shadowColorBottom};

  :hover {
    background: ${props => props.theme.commentHoverColor};
  }
`;

const Title = styled.div`
  width: 10rem;
`;

const Content = styled.span`
  margin: 0 1rem;
`;
