import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { AiOutlineEdit } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

import Button from '../elements/Button';
import { deleteComment, postComment } from '../utils/api/comment';
import { useDispatch } from 'react-redux';
import { __getComment } from '../utils/redux/modules/comment/getComment';
import Input from '../elements/Input';

export default function Comment({ id, comment, loginName }) {
  const [commentText, setCommentText] = useState('');
  const textAreaRef = useRef();
  const labelRef = useRef([]);
  const addToRefs = el => {
    labelRef.current.push(el);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  const handleResizeText = () => {
    const ref = textAreaRef.current;
    ref.style.height = '1.6rem';
    ref.style.height = ref.scrollHeight + 'px';
  };

  const handleAddComment = async () => {
    await postComment(id, { content: commentText });
    dispatch(__getComment(id));
    setCommentText('');
  };

  const handleDeleteComment = async e => {
    const commentId = e.target.parentElement.id;
    await deleteComment(commentId);
    dispatch(__getComment(id));
  };

  const handleShowComment = e => {
    const commentId = e.target.parentElement.id;
    const showComment = labelRef.current.filter(v => v.id === commentId);
    showComment[0].style.display = 'flex';
  };

  const handleEditClose = e => {
    e.target.parentElement.style.display = 'none';
  };

  return (
    <CommentContainer>
      {comment.map(v => (
        <CommentText key={uuidv4()}>
          <Content>
            <span>
              <NickName>{v.userName}</NickName>
              {v.content}
            </span>
            <span>
              {v.userName === loginName && (
                <User>
                  <Edit id={v.id} onClick={handleShowComment}>
                    <AiOutlineEdit />
                  </Edit>
                  <Delete id={v.id} onClick={handleDeleteComment}>
                    <RxCross1 />
                  </Delete>
                </User>
              )}
            </span>
          </Content>
          <Time>{'1시간전'}</Time>
          {v.userName === loginName && (
            <Label id={v.id} ref={addToRefs}>
              <Input
                width="100%"
                height="2rem"
                fontSize="4rem"
                mode="comment"
                placeholder="Edit Comment..."
              />
              <Button width="3rem" type="update">
                Edit
              </Button>
              <Button width="2.5rem" type="update" click={handleEditClose}>
                Close
              </Button>
            </Label>
          )}
        </CommentText>
      ))}
      <InputContainer>
        <TextArea
          ref={textAreaRef}
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
          onKeyUp={handleResizeText}
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
  margin-bottom: 5rem;
  scroll-margin: 5rem;
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

const User = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Edit = styled.div`
  :hover {
    color: ${props => props.theme.color.dark_mint};
    transform: scale(1.2);
  }
`;

const Delete = styled.div`
  :hover {
    color: ${props => props.theme.color.red};
    transform: scale(1.2);
  }
`;

const Label = styled.label`
  display: none;
  justify-content: space-between;
  width: 100%;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 0.2rem;
`;
