import QUERY from '../../constants/query';
import { getCookie } from '../cookie';
import Axios from './axios';

const axios = new Axios(process.env.REACT_APP_URL);

const cookie = getCookie(QUERY.COOKIE.COOKIE_NAME);
const option = {
  headers: {
    Authorization: `Bearer ${cookie}`,
  },
};

export const postLike = async postId => {
  return await axios.post(`/api/like-counts/${postId}`, '', option);
};
