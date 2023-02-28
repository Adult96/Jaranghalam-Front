import React from 'react';
import styled from 'styled-components';
import formatAgo from '../utils/formatDate';

import { v4 as uuidv4 } from 'uuid';

export default function MyCommentList({ myComment }) {
  console.log(myComment);

  const setDate = (createDate, modifiedDate) => {
    return formatAgo(createDate, modifiedDate);
  };

  return (
    <MyCommentWrapper>
      {myComment.map(v => (
        <Comment key={uuidv4()}>
          <Title>
            <span>{v.userName}</span>{' '}
            <span>{setDate(v.createdAt, v.modifiedAt)}</span>
          </Title>
          <Content>{v.content}</Content>
        </Comment>
      ))}
    </MyCommentWrapper>
  );
}

const MyCommentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Comment = styled.li`
  display: flex;
  width: 60%;
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
