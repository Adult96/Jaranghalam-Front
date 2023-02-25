import { removeCookie, setCookie } from '../cookie';
import QUERY from '../../constants/query';
import Axios from '../axios';

const axios = new Axios(process.env.REACT_APP_URL);

export const postLogin = async payload => {
  try {
    const response = await axios.post('/user/login', payload);
    const [, token] = response.headers.authorization.split(' ');
    console.log(response);
    setCookie('myToken', token);
  } catch (error) {
    const response = error.response;

    console.log(response);

    removeCookie(QUERY.COOKIE.COOKIE_NAME);
  }
};

export const postSignUp = async payload => {
  try {
    const response = await axios.post('/user/signup', payload);
    console.log(response);
    // const accessToken = response.data.token;

    // setCookie(QUERY.COOKIE.COOKIE_NAME, accessToken);
  } catch (error) {
    const response = error.response;
    console.log(response);
  }
};

export const getIdCheck = async payload => {
  try {
    const response = await axios.get(`/user/idCheck/${payload}`);
    console.log(response);
    // const accessToken = response.data.token;

    // setCookie(QUERY.COOKIE.COOKIE_NAME, accessToken);
  } catch (error) {
    const response = error.response;
    console.log(response);
  }
};

export const getNickNameCheck = async payload => {
  try {
    const response = await axios.get(`/user/nickNameCheck/${payload}`);
    console.log(response);
    // const accessToken = response.data.token;

    // setCookie(QUERY.COOKIE.COOKIE_NAME, accessToken);
  } catch (error) {
    const response = error.response;
    console.log(response);
  }
};
