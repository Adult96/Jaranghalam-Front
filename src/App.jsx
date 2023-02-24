import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import GlobalStyle from './styles/globalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import ThemeMode from './components/ThemeMode';
import Navbar from './components/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = darkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeMode darkMode={darkMode} onDarkMode={setDarkMode} />
      <Wrapper>
        <Navbar />
        <Outlet />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  @media (max-width: ${props => props.theme.screen.tablet_v}) {
    grid-template-rows: 100px 1fr;
  }
  @media (min-width: ${props => props.theme.screen.tablet_v}) {
    grid-template-columns: 1fr 6fr;
  }
`;

export default App;
