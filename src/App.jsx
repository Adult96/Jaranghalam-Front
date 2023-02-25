import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import GlobalStyle from './styles/globalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import ThemeMode from './components/ThemeMode';
import Navbar from './components/navbar/Navbar';
import ROUTER from './constants/router';

function App() {
  const { pathname } = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [showLoginIcon, setShowLoginIcon] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  useEffect(() => {
    pathname === ROUTER.PATH.LOGIN
      ? setShowLoginIcon(false)
      : setShowLoginIcon(true);
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeMode darkMode={darkMode} onDarkMode={setDarkMode} />
      <Wrapper>
        <Navbar showLoginIcon={showLoginIcon} />
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
