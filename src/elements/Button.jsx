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
  if (type === 'sort')
    return (
      <SortBtn
        width={width}
        height={height}
        fontSize={fontSize}
        radius={radius}
        onClick={click}
      >
        {children}
      </SortBtn>
    );

  if (type === 'update')
    return (
      <UpdateBtn
        width={width}
        height={height}
        fontSize={fontSize}
        onClick={click}
      >
        {children}
      </UpdateBtn>
    );

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
  border: none;
  border-radius: ${props => props.radius};
  outline: none;
  font-size: ${props => props.fontSize};
  cursor: pointer;
`;

const SortBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.theme.text};
  background-color: transparent;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 1rem;
  outline: none;
  font-size: ${props => props.fontSize};
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.bgHover};
  }
`;

const UpdateBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.theme.text};
  background-color: transparent;
  border: none;
  outline: none;
  font-size: ${props => props.fontSize};
  cursor: pointer;

  :hover {
    color: ${props => props.theme.bgHover};
  }
`;
