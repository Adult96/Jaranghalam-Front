import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { RxCross1 } from 'react-icons/rx';
import Button from '../elements/Button';

export default function Comment({ comment, loginName }) {
  const textAreaRef = useRef();

  const handleResizeText = () => {
    const ref = textAreaRef.current;
    ref.style.height = '1.6rem';
    ref.style.height = ref.scrollHeight + 'px';
  };

  return (
    <CommentContainer>
      {comment.map(v => (
        <CommentText key={uuidv4()}>
          <Content>
            <span>
              <NickName>{v.nickName}</NickName>
              {v.comment}
            </span>
            <span>{v.nickName === loginName && <RxCross1 />}</span>
          </Content>
          <Time>{'1시간전'}</Time>
        </CommentText>
      ))}
      <InputContainer>
        <TextArea
          ref={textAreaRef}
          onChange={handleResizeText}
          placeholder='댓글 달기... '
        ></TextArea>
        <Button width='4rem' type='update'>
          게시
        </Button>
      </InputContainer>
    </CommentContainer>
  );
}

const CommentContainer = styled.div`
  margin-bottom: 3rem;
`;

const CommentText = styled.div`
  margin: 1rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NickName = styled.span`
  font-weight: ${props => props.theme.fontWeight.bold};
  margin-right: 0.5rem;
`;

const Time = styled.p`
  font-size: ${props => props.theme.fontSize.micro};
  color: ${props => props.theme.dateColor};
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 1.6rem;
  font-size: ${props => props.theme.fontSize.small};
  outline: none;
  resize: none;
  overflow: hidden;
`;
