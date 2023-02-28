import React from 'react';
import styled from 'styled-components';

export default function Input({
  type,
  width,
  height,
  fontSize,
  placeholder,
  autoFocus,
  value,
  mode,
  onChange,
  children,
}) {
  if (mode === 'comment')
    return (
      <CommentInput
        width={width}
        height={height}
        fontSize={fontSize}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoFocus={autoFocus}
      />
    );

  return (
    <InputContainer>
      {children}
      <InputElement
        type={type}
        width={width}
        height={height}
        fontSize={fontSize}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
      />
    </InputContainer>
  );
}

const InputContainer = styled.div``;

const InputElement = styled.input`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 1rem;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.bgBtnColor};
  border: none;
  outline: none;
  font-size: ${props => props.fontSize};
`;

const CommentInput = styled(InputElement)`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 0.5rem;
  background-color: transparent;
  font-size: ${props => props.theme.fontSize.micro};
`;
