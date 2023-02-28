import QUERY from '../../constants/query';
import { getCookie } from '../cookie';
import Axios from './axios';

const axios = new Axios(process.env.REACT_APP_URL);

export const postComment = async (postId, payload) => {
  const cookie = getCookie(QUERY.COOKIE.COOKIE_NAME);
  const option = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoaTEyMzQiLCJleHAiOjE3MDg5NTIwMDksImlhdCI6MTY3NzQxNjAwOX0.BQ1kWVIs-x7nfTBJ6l8s360nppayIhxUDMIik5p29YY`,
    },
  };
  return await axios.post(`/api/comments/${postId}`, payload, option);
};

export const deleteComment = async postId => {
  const cookie = getCookie(QUERY.COOKIE.COOKIE_NAME);
  const option = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoaTEyMzQiLCJleHAiOjE3MDg5NTIwMDksImlhdCI6MTY3NzQxNjAwOX0.BQ1kWVIs-x7nfTBJ6l8s360nppayIhxUDMIik5p29YY`,
    },
  };
  return await axios.delete(`/api/comments/${postId}`, option);
};

export const putComment = async (postId, payload) => {
  const cookie = getCookie(QUERY.COOKIE.COOKIE_NAME);
  const option = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoaTEyMzQiLCJleHAiOjE3MDg5NTIwMDksImlhdCI6MTY3NzQxNjAwOX0.BQ1kWVIs-x7nfTBJ6l8s360nppayIhxUDMIik5p29YY`,
    },
  };
  return await axios.put(`/api/comments/${postId}`, payload, option);
};
