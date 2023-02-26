import React from 'react';
import styled, { css } from 'styled-components';

export default function Button(props) {
  return <Btn {...props}>{props.children}</Btn>;
}
//props는 여기 안에 뭐가 들어갈거야(뭐든 들어가)
//children은 컴포넌트에 뭔가를 넣어줄 수 있어
//버튼 기본값
Button.defaultProps = {
  w: '3rem',
  h: '2rem',
  bg: 'tomato',
  radius: '1rem',
};

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.bgBtnColor};
  /* border: 1px solid ${(props) => props.theme.borderColor}; */
  border: none;
  border-radius: ${(props) => props.radius};
  outline: none;
  font-size: ${(props) => props.fontSize};
  cursor: pointer;

  //Theme provider
  //추가
  ${(props) =>
    props.test &&
    css`
      width: 6.25rem;
      height: 2.5rem;
      margin-left: 20px;
      background-color: tomato;
      border-radius: 1rem;
      font-size: 2rem;
    `}

  ${(props) =>
    props.test2 &&
    css`
      width: 3.25rem;
      height: 2.5rem;
      background-color: green;
      border-radius: 0.2rem;
      font-size: 1.2rem;
    `}
`;
