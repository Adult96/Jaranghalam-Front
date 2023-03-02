import QUERY from '../../constants/query';
import { getCookie } from '../cookie';
import Axios from './axios';

const axios = new Axios(process.env.REACT_APP_URL);

export const postBoard = async payload => {
  const cookie = getCookie(QUERY.COOKIE.COOKIE_NAME);
  const option = {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  };
  return await axios.post(`/api/posts`, payload, option);
};

export const deleteBoard = async postId => {
  const cookie = getCookie(QUERY.COOKIE.COOKIE_NAME);
  const option = {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  };
  return await axios.delete(`/api/posts/${postId}`, option);
};

export const putBoard = async (postId, payload) => {
  const cookie = getCookie(QUERY.COOKIE.COOKIE_NAME);
  const option = {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  };
  return await axios.put(`/api/posts/${postId}`, payload, option);
};
