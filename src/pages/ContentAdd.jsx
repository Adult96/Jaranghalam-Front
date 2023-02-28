import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { __postContent } from '../utils/redux/modules/board/postAdd';
import { useRef } from 'react';
import { __getHome } from '../utils/redux/modules/home/getHome';

const StH6 = styled.h6`
  color: black;
  text-align: center;
  border-bottom: 2px solid ${props => props.theme.borderRadius.text};
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
`;

const StModalContainer = styled.div`
  text-align: center;
  max-width: 400px;
  width: 90%;
  max-height: 400px;
  height: 90%;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;

const StInputForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: row-reverse;
  align-items: center;
  max-width: 300px;
  max-height: 300px;
  margin-left: 100px;
  width: 90%;
  height: 90%;
  gap: 20px;
`;

const StTextpush = styled.div`
  flex: 1;
  width: 90%;
  height: 90%;
  margin-right: 20px;
`;

const Sttitletext = styled.input`
  width: 150px;
  height: 35px;
  outline: none;
  border-radius: ${props => props.theme.borderRadius.small};
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.text}; ;
`;

const StTextArea = styled.textarea`
  max-width: 150px;
  max-height: 200px;
  width: 100%;
  height: 250px;
  margin-top: 10px;
  overflow: auto;
  outline: none;
  border-radius: ${props => props.theme.borderRadius.small};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.bg};
`;

const StButton = styled.div`
  display: flex;
  margin-top: 300px;
  margin-right: 130px;
  position: fixed;
  gap: 40px;
`;

const Stimgpush = styled.div`
  flex: 1;
  margin-left: 5px;
  margin-bottom: 30x;
`;

const StCancelButton = styled.button`
  border-radius: ${props => props.theme.borderRadius.small};
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
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiLsnKDsoIAwMSIsImV4cCI6MTcwOTEyNjgzNSwiaWF0IjoxNjc3NTkwODM1fQ.RPQh9r_NKQfSu4sZT0q8Q1qgObuAjqYAKW5v3flFO7A`,
      },
    };
    await dispatch(__postContent({ formData, config }));
    setTitle('');
    setContent('');
    await dispatch(__getHome({ page: 1, query: '' }));
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
        <StH6>새 게시물 만들기</StH6>
        <StInputForm
          onSubmit={e => {
            e.preventDefault();
          }}
          encType="multipart/form-data"
        >
          <StTextpush>
            <Sttitletext
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
          </StTextpush>
          <StButton>
            <StCancelButton onClick={() => toggleModal()}>
              나가기
            </StCancelButton>
            <StCancelButton
              onClick={onConfirmButtonHandler}
              width={'100px'}
              radius={'30px'}
            >
              추가
            </StCancelButton>
          </StButton>
          <Stimgpush>
            <StsignupprofileImg htmlFor="profileImg">
              이미지 추가
            </StsignupprofileImg>
            <StInput
              type="file"
              accept="image/*"
              id="profileImg"
              onChange={Flieonload}
              ref={testRef}
            />
            <StImg src={imgUrl ? imgUrl : `img/pngwing.com.png`} />
          </Stimgpush>
        </StInputForm>
      </StModalContainer>
    </StModalBackground>
  );
}

export default ContentAdd;

//  <img src={selectedFile && URL.createObjectURL(selectedFile)} alt="selected image" />
