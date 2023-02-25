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
        alert(error.message);
        return Promise.reject(error);
      }
    );
  }

  async get(path, option) {
    return this.instance.get(path, option);
  }

  async post(path, payload) {
    return this.instance.post(path, payload);
  }

  async delete(path, payload) {
    return this.instance.delete(`${path}/${payload}`);
  }

  async patch(path, payload, option) {
    return this.instance.patch(`${path}/${payload}`, option);
  }
}
