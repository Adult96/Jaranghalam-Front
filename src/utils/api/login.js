import Axios from './axios';

const axios = new Axios(process.env.REACT_APP_URL);

export const postLogin = async payload => {
  await axios.post('/user/login', payload);
};

export const postSignUp = async payload => {
  await axios.post('/user/signup', payload);
};

export const getIdCheck = async payload => {
  await axios.get(`/user/idCheck/${payload}`);
};

export const getNickNameCheck = async payload => {
  await axios.get(`/user/nickNameCheck/${payload}`);
};
