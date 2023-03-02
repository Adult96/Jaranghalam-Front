import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { initGetHome, __getHome } from '../utils/redux/modules/home/getHome';
import { postBoard, putBoard } from '../utils/api/myBoard';
import ROUTER from '../constants/router';
import { __getMy } from '../utils/redux/modules/my/getMy';
import { useLocation } from 'react-router-dom';
import Valid from '../validation/inputValidation';

import { AiFillInstagram } from 'react-icons/ai';

function ContentAdd({ toggleModal, edit, postId }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedFile, setSelectedFile] = useState(new FormData());
  const [imgUrl, setImgUrl] = useState('');
  const testRef = useRef();
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const Flieonload = e => {
    setSelectedFile(e.target.files[0]);
    saveImgFile();
  };

  //모달 속 추가 핸들러 (이미지 업로드, 데이터 업로드)
  const onConfirmButtonHandler = async () => {
    if (!Valid.emptyAddCheck(imgUrl, title, content)) return;
    if (!Valid.addLenghCheck(title, content)) return;

    const formData = new FormData();

    const post = {
      title,
      content,
    };
    formData.append(
      'requestDto',
      new Blob([JSON.stringify(post)], { type: 'application/json' }),
    );
    formData.append('image', selectedFile);

    if (edit) {
      await putBoard(postId, formData);
    } else {
      await postBoard(formData);
    }

    if (pathname === ROUTER.PATH.HOME) {
      await dispatch(initGetHome());
      await dispatch(__getHome({ page: 1, query: '' }));
    } else if (pathname === ROUTER.PATH.MY) {
      await dispatch(__getMy());
    }

    setTitle('');
    setContent('');
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
        <StH6>게시글 추가</StH6>
        <StInputForm
          onSubmit={e => {
            e.preventDefault();
          }}
          encType="multipart/form-data"
        >
          <FormContainer>
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
              {imgUrl ? (
                <StImg src={imgUrl} />
              ) : (
                <ImgInstar>
                  <AiFillInstagram />
                </ImgInstar>
              )}
            </Stimgpush>
            <StTextpush>
              <StTitletext
                type={'text'}
                value={title}
                onChange={e => {
                  setTitle(e.target.value);
                }}
                placeholder={'제목...'}
                width={'150px'}
              />
              <StTextArea
                type={'text'}
                value={content}
                onChange={e => {
                  setContent(e.target.value);
                }}
                placeholder={'내용...'}
              />
            </StTextpush>
          </FormContainer>
          <StButton>
            <StCancelButton onClick={() => toggleModal()} type="button">
              나가기
            </StCancelButton>

            <StCancelButton
              onClick={onConfirmButtonHandler}
              width={'100px'}
              radius={'30px'}
            >
              {edit ? '수정' : '추가'}
            </StCancelButton>
          </StButton>
        </StInputForm>
      </StModalContainer>
    </StModalBackground>
  );
}

export default ContentAdd;

const StH6 = styled.div`
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.borderRadius.text};
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
  background-color: ${props => props.theme.modalBg};
  backdrop-filter: blur(0.2rem);
  z-index: 1;
`;

const StModalContainer = styled.div`
  text-align: center;
  max-width: 400px;
  width: 100%;
  max-height: 400px;
  height: 100%;
  border: 1px solid ${props => props.theme.text};
  border-radius: 10px;
  background-color: ${props => props.theme.bg};
`;

const FormContainer = styled.div`
  display: flex;
`;

const StInputForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StTextpush = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
`;

const StTitletext = styled.input`
  width: 150px;
  height: 35px;
  outline: none;
  border: 1px solid ${props => props.theme.text};
  border-radius: ${props => props.theme.borderRadius.small};
  outline: none;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.text};
`;

const StTextArea = styled.textarea`
  max-width: 150px;
  min-height: 200px;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  border: 1px solid ${props => props.theme.text};
  border-radius: ${props => props.theme.borderRadius.small};
  background-color: ${props => props.theme.bg};
  border-radius: ${props => props.theme.borderRadius.small};
  outline: none;
  overflow: auto;
  resize: none;
`;

const StButton = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  padding: 2rem 1.5rem 1rem 1rem;
  gap: 1rem;
`;

const Stimgpush = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StCancelButton = styled.button`
  border: 1px solid ${props => props.theme.borderColor};
  outline: none;
  border-radius: ${props => props.theme.borderRadius.small};
  background-color: transparent;
  :hover {
    background-color: ${props => props.theme.bgBtnColor};
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

const ImgInstar = styled.div`
  font-size: 10rem;
`;
