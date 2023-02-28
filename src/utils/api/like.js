import Axios from './axios';

const axios = new Axios(process.env.REACT_APP_URL);

export const postLike = async postId => {
  return await axios.post(`/api/like-counts/${postId}`);
};
