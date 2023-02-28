import React from 'react';
import styled from 'styled-components';
import formatAgo from '../utils/formatDate';

import { v4 as uuidv4 } from 'uuid';

export default function MyCommentList({ myComment }) {
  console.log(myComment);

  const setDate = date => {
    return formatAgo(date);
  };

  return (
    <MyCommentWrapper>
      {myComment.map(v => (
        <Comment key={uuidv4()}>
          <span>{setDate(v.createdAt, v.modifiedAt)}</span>
          <span>{v.content}</span>
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
`;
