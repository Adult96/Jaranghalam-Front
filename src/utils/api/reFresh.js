import Axios from './axios';

const axios = new Axios(process.env.REACT_APP_URL);

export const postRefresh = async cookie => {
  const option = {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  };
  return await axios.post('/user/isRefreshToken', '', option);
};
