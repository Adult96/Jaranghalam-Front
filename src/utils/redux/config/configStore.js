import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import postContentSlice from '../modules/board/postAdd';

const store = configureStore({
  reducer: {
    board: postContentSlice,
=======
import getHome from '../modules/home/getHome';
import getCheckId from '../modules/inputCheck/getId';
import getCheckNickName from '../modules/inputCheck/getNickName';

const store = configureStore({
  reducer: {
    getHome,
    getCheckId,
    getCheckNickName,
>>>>>>> origin/main
  },
});

export default store;
