import React, { useState } from 'react';
import { AiFillLock } from 'react-icons/ai';
import { HiOutlineUserAdd } from 'react-icons/hi';
import styled from 'styled-components';

import Button from '../elements/Button';
import Input from '../elements/Input';

import Valid from '../validation/inputValidation';
import { postLogin, postSignUp } from '../utils/api/login';
import { getCookie } from '../utils/cookie';
import { useNavigate } from 'react-router-dom';
import ROUTER from '../constants/router';

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [nickName, setNickName] = useState('');
  const [signUp, setSignUp] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    if (signUp) {
      if (!Valid.signUp(id, pw, pwCheck, nickName)) {
        return;
      }
    } else {
      if (!Valid.login(id, pw)) {
        return;
      }
    }

    loginProcess();
  };

  const handleSignUp = () => {
    resetLoginInput();
    setSignUp(v => !v);
  };

  const loginProcess = async () => {
    const signUpData = { userName: id, userNickName: nickName, password: pw };
    const loginData = { userName: id, password: pw };
    await loginAxios(loginData, signUpData);

    const token = getCookie('myToken');
    token && navigate(ROUTER.PATH.BACK);
  };

  const loginAxios = async (loginData, signUpData) => {
    if (signUp) {
      await postSignUp(signUpData);
      resetLoginInput();
      setSignUp(false);
    } else {
      await postLogin(loginData);
      resetLoginInput();
    }
  };

  const resetLoginInput = () => {
    setId('');
    setPw('');
    setPwCheck('');
  };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <h1>{signUp ? <HiOutlineUserAdd /> : <AiFillLock />}</h1>
        <Input
          name='id'
          width='20rem'
          height='2.5rem'
          fontSize='1.3rem'
          placeholder='ID'
          value={id}
          onChange={e => setId(e.target.value)}
          autoFocus={true}
        />
        <Input
          type={showPw ? 'text' : 'password'}
          width='20rem'
          height='2.5rem'
          fontSize='1.3rem'
          value={pw}
          onChange={e => setPw(e.target.value)}
          placeholder='PW'
        />
        {signUp && (
          <Input
            type={showPw ? 'text' : 'password'}
            width='20rem'
            height='2.5rem'
            fontSize='1.3rem'
            value={pwCheck}
            onChange={e => setPwCheck(e.target.value)}
            placeholder='PW CHECK'
          />
        )}
        {signUp && (
          <Input
            type='text'
            width='20rem'
            height='2.5rem'
            fontSize='1.3rem'
            value={nickName}
            onChange={e => setNickName(e.target.value)}
            placeholder='NiCK NAME'
          />
        )}
        <ShowPasswordContainer>
          <Input
            type='checkbox'
            onChange={e => {
              setShowPw(e.target.checked);
            }}
          />
          <span>Show Password</span>
        </ShowPasswordContainer>
        <ButtonContainer>
          <Button width='10rem' height='3rem'>
            {signUp ? 'Enter' : 'Login'}
          </Button>
          <Button
            width='10rem'
            height='3rem'
            type='button'
            click={handleSignUp}
          >
            {signUp ? 'back' : 'SignUp'}
          </Button>
        </ButtonContainer>
      </LoginForm>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-left: 1px solid ${props => props.theme.borderColor};
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;

const ShowPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
