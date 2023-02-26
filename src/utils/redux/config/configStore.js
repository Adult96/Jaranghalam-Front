import { configureStore } from '@reduxjs/toolkit';
import getHome from '../modules/home/getHome';
import getCheckId from '../modules/inputCheck/getId';
import getCheckNickName from '../modules/inputCheck/getNickName';

const store = configureStore({
  reducer: {
    getHome,
    getCheckId,
    getCheckNickName,
  },
});

export default store;
