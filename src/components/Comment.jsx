import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { RxCross1 } from 'react-icons/rx';
import Button from '../elements/Button';
import { postComment } from '../utils/api/comment';
import { useDispatch, useSelector } from 'react-redux';
import { __getComment } from '../utils/redux/modules/comment/getComment';

export default function Comment({ id, comment, loginName }) {
  const textAreaRef = useRef();
  const dispatch = useDispatch();
  const a = useSelector(state => state);

  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  const handleResizeText = () => {
    const ref = textAreaRef.current;
    ref.style.height = '1.6rem';
    ref.style.height = ref.scrollHeight + 'px';
  };

  const handleAddComment = () => {
    const text = textAreaRef.current.value;
    postComment(id, { content: text });
  };

  // if (isLoading) return;
  // if (isError) return;
  console.log(a);
  return (
    <CommentContainer>
      {comment.map(v => (
        <CommentText key={uuidv4()}>
          <Content>
            <span>
              <NickName>{v.userName}</NickName>
              {v.content}
            </span>
            <span>{v.userName === loginName && <RxCross1 />}</span>
          </Content>
          <Time>{'1시간전'}</Time>
        </CommentText>
      ))}
      <InputContainer>
        <TextArea
          ref={textAreaRef}
          onChange={handleResizeText}
          placeholder="댓글 달기... "
        ></TextArea>
        <Button width="4rem" type="update" click={handleAddComment}>
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
  margin-right: 0.5rem;
  font-weight: ${props => props.theme.fontWeight.bold};
`;

const Time = styled.p`
  color: ${props => props.theme.dateColor};
  font-size: ${props => props.theme.fontSize.micro};
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.text};
  margin: 0 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 1.6rem;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: ${props => props.theme.fontSize.small};
  resize: none;
  overflow: hidden;
`;
