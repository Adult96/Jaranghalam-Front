import QUERY from '../../../../constants/query';
import Axios from '../../../axios';
import { removeCookie } from '../../../cookie';
import { setCookie } from '../cookie';

const axios = new Axios(process.env.REACT_APP_URL);

export const postLogin = async payload => {
  try {
    const response = await axios.get('/user/login', payload);
    console.log(response);
  } catch (error) {
    const response = error.response;

    console.log(response);

    removeCookie(QUERY.COOKIE.COOKIE_NAME);
  }
};

export const postSignUp = async payload => {
  try {
    const response = await axios.post('/user/signup', payload, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload}`,
      },
    });
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
