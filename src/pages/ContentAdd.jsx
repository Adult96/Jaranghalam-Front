import React from 'react';
import { useState } from 'react';
import GlobalStyle from '../styles/globalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/theme';
import ThemeMode from '../components/ThemeMode';
import { Btn } from '../elements/Button';
import { useDispatch } from 'react-redux';
import { __postContent } from '../utils/redux/modules/postAdd';

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
  flex-wrap: wrap;
`;

const StInputBox = styled.input`
  display: block;
`;

function ContentAdd() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = darkMode ? darkTheme : lightTheme;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('hi');
  const [img, setImg] = useState('');

  const dispatch = useDispatch();

  const onSubmitAddButtonHandler = (a, b) => {
    const result = dispatch(__postContent({ title, content }));
    alert('d');
    console.log('result', result);
  };

  return (
    <ThemeProvider theme={theme}>
      <StContentAddBox>
        <GlobalStyle />
        <ThemeMode darkMode={darkMode} onDarkMode={setDarkMode} />
        <StInputForm>
          <StInputBox
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <StInputBox
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <Btn type="button" onClick={() => onSubmitAddButtonHandler(title, content)}>
            꾺꾺
          </Btn>
        </StInputForm>
      </StContentAddBox>
    </ThemeProvider>
  );
}

export default ContentAdd;
