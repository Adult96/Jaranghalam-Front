import Axios from './axios';

const axios = new Axios(process.env.REACT_APP_URL);

export const postLogin = async payload => {
  return await axios.post('/user/login', payload);
};

export const postSignUp = async payload => {
  return await axios.post('/user/signup', payload);
};

export const getIdCheck = async payload => {
  return await axios.get(`/user/idCheck/${payload}`);
};

export const getNickNameCheck = async payload => {
  return await axios.get(`/user/nickNameCheck/${payload}`);
};
