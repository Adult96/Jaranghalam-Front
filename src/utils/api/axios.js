import axios from 'axios';
import QUERY from '../../constants/query';
import { setCookie } from '../cookie';

export default class Axios {
  constructor(url) {
    this.instance = axios.create({
      baseURL: url,
    });

    this.instance.interceptors.response.use(
      response => {
        const token = response.headers.authorization;
        if (token) {
          const [, parseToken] = token.split(' ');
          setCookie(QUERY.COOKIE.COOKIE_NAME, parseToken);
        }

        return response;
      },
      error => {
        const myPage = '/api/posts/my-post-list';
        if (error.config.url !== myPage) {
          alert(error.response.data.errorMessage);
        }
        console.log(error);
        return Promise.reject(error);
      },
    );
  }

  async get(path, option) {
    console.log(path);
    return this.instance.get(path, option);
  }

  async post(path, payload, option) {
    return this.instance.post(path, payload, option);
  }

  async delete(path, option) {
    return this.instance.delete(`${path}`, option);
  }

  async patch(path, payload, option) {
    return this.instance.patch(`${path}/${payload}`, option);
  }

  async put(path, payload, option) {
    return this.instance.put(`${path}`, payload, option);
  }
}
