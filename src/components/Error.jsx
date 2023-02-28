import React from 'react';
import styled from 'styled-components';

export default function Error({ children }) {
  return <ErrorWrapper>{children}</ErrorWrapper>;
}

const ErrorWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
