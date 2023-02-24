import React from 'react';
import { useState } from 'react';
import GlobalStyle from '../styles/globalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/theme';
import ThemeMode from '../components/ThemeMode';
import { Btn } from '../elements/Button';
import { useDispatch } from 'react-redux';
import { __postContent } from '../utils/redux/modules/board/postAdd';
import axios from 'axios';

const StContentAddBox = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StInputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
`;

const StInputBox = styled.input`
  display: block;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.bgBtnColor};
`;

function ContentAdd() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = darkMode ? darkTheme : lightTheme;
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [selectedFile, setSelectedFile] = useState(null);

  const dispatch = useDispatch();

  const form = (e) => {
    e.preventDefault();
  };

  const onSubmitAddButtonHandler = () => {
    const formData = new FormData();
    formData.append('image', selectedFile);
    // 서버에 이미지 업로드 요청 보내기
    axios.post('http://localhost:4001/board', formData).then((response) => {
      // 업로드된 파일의 URL을 사용하여 게시물 데이터를 만듦
      const post = {
        title,
        content,
        imageUrl: response.data.url,
      };
      // 생성된 게시물 데이터를 서버에 전송
      dispatch(__postContent(post));
      setTitle('');
      setContent('');
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <StContentAddBox>
        <GlobalStyle />
        <ThemeMode darkMode={darkMode} onDarkMode={setDarkMode} />
        <StInputForm onSubmit={form} enctype="multipart/form-data">
          <StInputBox
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="title"
          />
          <StInputBox
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="content"
          />
          <StInputBox type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />

          <Btn type="button" onClick={() => onSubmitAddButtonHandler(title, content)}>
            꾺꾺(모든것)
          </Btn>
          <img src={selectedFile && URL.createObjectURL(selectedFile)} alt="selected image" />
        </StInputForm>
      </StContentAddBox>
    </ThemeProvider>
  );
}

export default ContentAdd;
