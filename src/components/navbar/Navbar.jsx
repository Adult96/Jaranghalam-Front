import React from 'react';
import styled from 'styled-components';
import IconBar from './IconBar';
import TextBar from './TextBar';

export default function Navbar({ showLoginIcon, showLogOut, onLogOut }) {
  return (
    <NavbarContainer>
      <IconBar
        showLoginIcon={showLoginIcon}
        showLogOut={showLogOut}
        onLogOut={onLogOut}
      />
      <TextBar
        showLoginIcon={showLoginIcon}
        showLogOut={showLogOut}
        onLogOut={onLogOut}
      />
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
