import { configureStore } from '@reduxjs/toolkit';
import getHome from '../modules/home/getHome';
import getCheckId from '../modules/inputCheck/getId';
import getCheckNickName from '../modules/inputCheck/getNickName';
import getDetail from '../modules/home/getDetail';
import getMy from '../modules/my/getMy';
import getComment from '../modules/my/getMy';

const store = configureStore({
  reducer: {
    getHome,
    getCheckId,
    getCheckNickName,
    getDetail,
    getMy,
    getComment,
  },
});

export default store;
