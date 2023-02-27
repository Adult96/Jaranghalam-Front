import React from 'react';
import styled from 'styled-components';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import Button from '../elements/Button';

function ThemeMode({ theme, darkMode, onDarkMode }) {
  const handleStyleMode = () => {
    onDarkMode(mode => !mode);
  };

  return (
    <StyleMode>
      <Button
        width='3rem'
        height='3rem'
        radius='100%'
        fontSize='2rem'
        click={handleStyleMode}
      >
        {darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
      </Button>
    </StyleMode>
  );
}

export default ThemeMode;

const StyleMode = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
  z-index: 1000;
`;
