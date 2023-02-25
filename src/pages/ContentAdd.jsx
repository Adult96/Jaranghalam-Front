import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import Input from '../elements/input';
import { useDispatch } from 'react-redux';
import { __postContent } from '../utils/redux/modules/board/postAdd';
import axios from 'axios';

const StH3 = styled.h3`
  margin-bottom: 50px;
  color: red;
  border-bottom: 2px solid ${(props) => props.theme.text};
`;

const StInputForm = styled.form`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  margin-left: 60px;
  margin-top: 50px;
  gap: 30px;
`;

const StTitleContentInputBox = styled.div`
  overflow: auto;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding-top: 20px;
`;

const StTextAreaBox = styled.textarea`
  margin-top: 20px;
`;

const StFileInputBox = styled.div`
  padding-top: 20px;
  overflow: auto;
`;

//모달 css
export const StModalBackground = styled.div`
  display: flex;
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: #ebe1e18a;
  backdrop-filter: blur(3px);
`;

export const StModalContainer = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;

function ContentAdd({ toggleModal }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  //모달 속 추가 핸들러
  const onConfirmButtonHandler = () => {
    const formData = new FormData();
    formData.append('image', selectedFile);
    axios.post('http://localhost:4001/board', formData).then((response) => {
      const post = {
        title,
        content,
        imageUrl: response.data.url,
      };
      dispatch(__postContent(post));
      setTitle('');
      setContent('');
      toggleModal();
    });
  };

  return (
    <StModalBackground>
      <StModalContainer>
        <StH3>새 게시물 만들기</StH3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          enctype="multipart/form-data"
        >
          <div>
            <Input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="title"
            />
            <textarea
              type="text"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="content"
            />
            <p style={{ marginLeft: '150px' }}>
              <Button test onClick={onConfirmButtonHandler}>
                꾺
              </Button>
            </p>
          </div>
          <div>
            <Input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
          </div>
        </form>
      </StModalContainer>
    </StModalBackground>
  );
}

export default ContentAdd;

//  <img src={selectedFile && URL.createObjectURL(selectedFile)} alt="selected image" />
