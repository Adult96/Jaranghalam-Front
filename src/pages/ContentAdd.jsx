import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import Input from '../elements/input';
import { useDispatch } from 'react-redux';
import { __postContent } from '../utils/redux/modules/board/postAdd';
import axios from 'axios';

const StH3 = styled.h3`
  color: black;
  border-bottom: 2px solid ${(props) => props.theme.borderRadius.text};
`;

const StInputForm = styled.form`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 30px;
`;

const StTextArea = styled.textarea`
  width: 130px;
  height: 200px;
  column-gap: 10px;
  overflow: auto;
  color: ${(props) => props.theme.text};
`;

const StFile = styled.div`
  margin-bottom: 234px;
`;

//모달 css
const StModalBackground = styled.div`
  display: flex;
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: #f0ededc5;
  backdrop-filter: blur(3px);
`;

const StModalContainer = styled.div`
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
      alert('완료!!!!!!');
      toggleModal();
    });
  };

  return (
    <StModalBackground>
      <StModalContainer>
        <StH3>새 게시물 만들기</StH3>
        <StInputForm
          onSubmit={(e) => {
            e.preventDefault();
          }}
          encType="multipart/form-data"
        >
          <div>
            <Input
              type={'text'}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder={'title'}
              width={'130px'}
            />
            <StTextArea
              type={'text'}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder={'content'}
            />
            <Button click={onConfirmButtonHandler} width={'100px'} radius={'30px'}>
              꾺
            </Button>
          </div>
          <StFile>
            <Input
              type={'file'}
              width={'150px'}
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </StFile>
        </StInputForm>
      </StModalContainer>
    </StModalBackground>
  );
}

export default ContentAdd;

//  <img src={selectedFile && URL.createObjectURL(selectedFile)} alt="selected image" />
