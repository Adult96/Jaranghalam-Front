import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import GlobalStyle from './styles/globalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import ThemeMode from './components/ThemeMode';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = darkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeMode darkMode={darkMode} onDarkMode={setDarkMode} />
      <Outlet />
    </ThemeProvider>
  );
}
export default App;
