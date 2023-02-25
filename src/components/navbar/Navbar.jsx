import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import IconBar from './IconBar';
import TextBar from './TextBar';

export default function Navbar() {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate('/login');
  };

  return (
    <NavbarContainer>
      <IconBar onClickLogin={handleClickLogin} />
      <TextBar onClickLogin={handleClickLogin} />
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  display: flex;
  margin: 2rem 1rem 1rem 1rem;
  font-size: ${props => props.theme.fontSize.large_medium};

  @media (max-width: 1450px) {
    justify-content: center;
    margin: 1rem;
    font-size: ${props => props.theme.fontSize.large};
  }
`;
