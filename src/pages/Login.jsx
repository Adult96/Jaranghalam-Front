import React, { useState } from 'react';
import { AiFillLock, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { HiOutlineUserAdd } from 'react-icons/hi';
import styled from 'styled-components';

import Button from '../elements/Button';
import Input from '../elements/Input';

import Valid from '../validation/inputValidation';
import { postLogin, postSignUp } from '../utils/api/login';
import { getCookie } from '../utils/cookie';
import { useNavigate } from 'react-router-dom';
import ROUTER from '../constants/router';
import { useDispatch, useSelector } from 'react-redux';
import { initID, __getCheckId } from '../utils/redux/modules/inputCheck/getId';
import { __getCheckNickName } from '../utils/redux/modules/inputCheck/getNickName';

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [nickName, setNickName] = useState('');
  const [signUp, setSignUp] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isIdDone, isIdLoading, isIdError } = useSelector(
    state => state.getCheckId
  );
  const { isNickNameDone, isNickNameLoading, isNickNameError } = useSelector(
    state => state.getCheckNickName
  );

  const handleSubmit = e => {
    e.preventDefault();

    if (signUp) {
      if (!Valid.signUp(id, pw, pwCheck, nickName, isIdDone, isNickNameDone)) {
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

  const handleIdCheck = id => {
    dispatch(__getCheckId(id));
  };

  const handleNickNameCheck = nickName => {
    dispatch(__getCheckNickName(nickName));
  };

  const resetLoginInput = () => {
    setId('');
    setNickName('');
    setPw('');
    setPwCheck('');
    dispatch(initID());
  };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <h1>{signUp ? <HiOutlineUserAdd /> : <AiFillLock />}</h1>
        <Label>
          <Input
            name='id'
            width={signUp ? '16rem' : '20rem'}
            height='2.5rem'
            fontSize='1.3rem'
            placeholder='ID'
            value={id}
            onChange={e => setId(e.target.value)}
            autoFocus={true}
          />
          {signUp && (
            <Button
              type='button'
              width='4rem'
              height='100%'
              click={() => handleIdCheck(id)}
            >
              중복 검사
            </Button>
          )}
          {isIdLoading && signUp && (
            <Loding>
              <img src='/img/spinner.gif' alt='spinner' />
            </Loding>
          )}
          {isIdDone && signUp && (
            <Done>
              <AiOutlineCheck />
            </Done>
          )}
          {isIdError && signUp && (
            <Error>
              <AiOutlineClose />
            </Error>
          )}
        </Label>
        {signUp && (
          <Label>
            <Input
              type='text'
              width={signUp ? '16rem' : '20rem'}
              height='2.5rem'
              fontSize='1.3rem'
              value={nickName}
              onChange={e => setNickName(e.target.value)}
              placeholder='NiCK NAME'
            />
            {signUp && (
              <Button
                type='button'
                width='4rem'
                height='100%'
                click={() => handleNickNameCheck(nickName)}
              >
                중복 검사
              </Button>
            )}
            {isNickNameLoading && (
              <Loding>
                <img src='/img/spinner.gif' alt='spinner' />
              </Loding>
            )}
            {isNickNameDone && (
              <Done>
                <AiOutlineCheck />
              </Done>
            )}
            {isNickNameError && (
              <Error>
                <AiOutlineClose />
              </Error>
            )}
          </Label>
        )}
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

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Loding = styled.div`
  position: absolute;
  right: -2rem;
  display: flex;
  align-items: center;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

const Done = styled(Loding)`
  right: -1.5rem;
  color: ${props => props.theme.color.dark_mint};
`;

const Error = styled(Loding)`
  right: -1.5rem;
  color: ${props => props.theme.color.red};
`;
