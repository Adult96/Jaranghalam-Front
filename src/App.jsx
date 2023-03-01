import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import GlobalStyle from './styles/globalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import ThemeMode from './components/ThemeMode';
import Navbar from './components/navbar/Navbar';
import ROUTER from './constants/router';
import { getCookie, removeCookie } from './utils/cookie';
import Storage from './utils/localStorage';
import ContentAdd from './components/ContentAdd';

function App() {
  const { pathname } = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [showLoginIcon, setShowLoginIcon] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const theme = darkMode ? darkTheme : lightTheme;

  useEffect(() => {
    pathname === ROUTER.PATH.LOGIN
      ? setShowLoginIcon(false)
      : setShowLoginIcon(true);
  }, [pathname]);

  useEffect(() => {
    const userName = Storage.getUserName();
    if (userName && pathname === ROUTER.PATH.LOGIN) {
      navigate(ROUTER.PATH.HOME);
    } else if (userName && pathname === ROUTER.PATH.HOME) {
      setShowLogOut(true);
    } else if (userName && pathname === ROUTER.PATH.MY) {
      setShowLogOut(true);
    } else if (userName && pathname === ROUTER.PATH.LIKE) {
      setShowLogOut(true);
    }
  }, [navigate, pathname]);

  const handleLogOut = () => {
    removeCookie('myToken');
    Storage.removeUserName();
    setShowLogOut(false);
    navigate(ROUTER.PATH.HOME);
  };

  const handleShowModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeMode darkMode={darkMode} onDarkMode={setDarkMode} />
      {showModal ? <ContentAdd toggleModal={handleShowModal} /> : null}
      <Wrapper>
        <Navbar
          modal={showModal}
          onShowModal={handleShowModal}
          showLoginIcon={showLoginIcon}
          showLogOut={showLogOut}
          onLogOut={handleLogOut}
        />
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
