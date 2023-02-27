import { configureStore } from '@reduxjs/toolkit';
import getHome from '../modules/home/getHome';
import getCheckId from '../modules/inputCheck/getId';
import getCheckNickName from '../modules/inputCheck/getNickName';
import postContentSlice from '../modules/board/postAdd';

const store = configureStore({
  reducer: {
    getHome,
    getCheckId,
    getCheckNickName,
    postContentSlice,
  },
});

export default store;
