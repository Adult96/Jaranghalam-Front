import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import Input from '../elements/Input';
import { useDispatch } from 'react-redux';
import { __postContent } from '../utils/redux/modules/board/postAdd';
import axios from 'axios';
import { useRef } from 'react';

const StH3 = styled.h3`
  color: black;
  border-bottom: 2px solid ${props => props.theme.borderRadius.text};

  @media (max-width: 800px) {
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
  }
`;

const StInputForm = styled.form`
  display: flex;
  /* flex-direction: row-reverse; */
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 110px;

  @media (max-width: 800px) {
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
  }
`;

const StTextArea = styled.textarea`
  width: 150px;
  height: 200px;
  margin-top: 10px;
  overflow: auto;
  border-radius: ${props => props.theme.borderRadius.small};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.bg};

  @media (max-width: 800px) {
    position: fixed;
    overflow: auto;
    max-width: 80vw;
    max-height: 80vh;
  }
`;

const StFile = styled.div`
  margin-left: 40px;
  margin-bottom: 220px;
  border-radius: ${props => props.theme.borderRadius.small};
`;

const StButton = styled.div`
  margin-bottom: 30px;
  @media (max-width: 800px) {
    position: fixed;
    bottom: 1px;
    font-size: 0.8rem;
  }
`;

const StsignupprofileImg = styled.label`
  margin: 5px 0 20px 0;
  font-weight: bold;
  font-size: 13px;
  color: #0095f6;
  display: inline-block;
  cursor: pointer;
`;

const StInput = styled.input`
  display: none;
`;

const StImg = styled.img`
  max-width: 200px;
  width: 200px;
  height: 200px;
`;

//모달 css
const StModalBackground = styled.div`
  display: flex;
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #f0ededc5;
  backdrop-filter: blur(3px);
  z-index: 1;

  @media (max-width: 800px) {
    background-color: #4e130873;
  }
`;

const StModalContainer = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  width: 500px;
  max-height: 90%;
  height: 500px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;

  @media (max-width: 800px) {
    width: 500px;
    height: 500px;
  }
`;

function ContentAdd({ toggleModal }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedFile, setSelectedFile] = useState(new FormData());
  const [imgUrl, setImgUrl] = useState('');
  const testRef = useRef();

  const dispatch = useDispatch();

  const Flieonload = e => {
    setSelectedFile(e.target.files[0]);
    saveImgFile();
  };

  //모달 속 추가 핸들러 (이미지 업로드, 데이터 업로드)
  const onConfirmButtonHandler = async () => {
    const formData = new FormData();
    console.log(selectedFile);

    const post = {
      title,
      content,
    };
    formData.append(
      'requestDto',
      new Blob([JSON.stringify(post)], { type: 'application/json' }),
    );
    formData.append('image', selectedFile);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoaTEyMzQiLCJleHAiOjE3MDg5NTIwMDksImlhdCI6MTY3NzQxNjAwOX0.BQ1kWVIs-x7nfTBJ6l8s360nppayIhxUDMIik5p29YY`,
      },
    };
    dispatch(__postContent({ formData, config }));
    dispatch(__getHome);
    // dispatch(__postContent(post));
    setTitle('');
    setContent('');
    alert('완료!!!!!!');
    toggleModal();
  };

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    const file = testRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgUrl(reader.result);
    };
  };

  return (
    <StModalBackground>
      <StModalContainer>
        <StH3>새 게시물 만들기</StH3>
        <StInputForm
          onSubmit={e => {
            e.preventDefault();
          }}
          encType="multipart/form-data"
        >
          <div>
            <Input
              type={'text'}
              value={title}
              onChange={e => {
                setTitle(e.target.value);
              }}
              placeholder={'title'}
              width={'150px'}
            />
            <StTextArea
              type={'text'}
              value={content}
              onChange={e => {
                setContent(e.target.value);
              }}
              placeholder={'content'}
            />
            <StButton>
              <Button
                click={onConfirmButtonHandler}
                width={'100px'}
                radius={'30px'}
              >
                꾺
              </Button>
            </StButton>
          </div>
          <StsignupprofileImg htmlFor="profileImg">
            이미지 추가
          </StsignupprofileImg>
          <StInput
            type="file"
            accept="image/*"
            id="profileImg"
            onChange={Flieonload}
            // onChange={saveImgFile}
            ref={testRef}
          />
          <StImg src={imgUrl ? imgUrl : `/images/icon/user.png`} />
        </StInputForm>
      </StModalContainer>
    </StModalBackground>
  );
}

export default ContentAdd;

//  <img src={selectedFile && URL.createObjectURL(selectedFile)} alt="selected image" />
