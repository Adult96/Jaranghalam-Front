import Axios from './axios';

const axios = new Axios(process.env.REACT_APP_URL);

const option = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoaTEyMzQiLCJleHAiOjE3MDg5NTIwMDksImlhdCI6MTY3NzQxNjAwOX0.BQ1kWVIs-x7nfTBJ6l8s360nppayIhxUDMIik5p29YY`,
  },
};

export const postLike = async postId => {
  return await axios.post(`/api/like-counts/${postId}`, '', option);
};
