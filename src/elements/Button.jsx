import React from 'react';
import styled from 'styled-components';

export default function Button({
  width,
  height,
  fontSize,
  radius,
  type,
  click,
  children,
}) {
  return (
    <Btn
      width={width}
      height={height}
      fontSize={fontSize}
      radius={radius}
      type={type}
      onClick={click}
    >
      {children}
    </Btn>
  );
}

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.bgBtnColor};
  /* border: 1px solid ${props => props.theme.borderColor}; */
  border: none;
  border-radius: ${props => props.radius};
  outline: none;
  font-size: ${props => props.fontSize};
  cursor: pointer;
`;
