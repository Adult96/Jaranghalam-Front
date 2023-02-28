import { configureStore } from '@reduxjs/toolkit';
import getHome from '../modules/home/getHome';
import getCheckId from '../modules/inputCheck/getId';
import getCheckNickName from '../modules/inputCheck/getNickName';
import postContentSlice from '../modules/board/postAdd';
import getDetail from '../modules/home/getDetail';
import getMy from '../modules/my/getMy';
import getComment from '../modules/comment/getComment';
import getMyComment from '../modules/my/getMyComment';

const store = configureStore({
  reducer: {
    getHome,
    getCheckId,
    getCheckNickName,
    postContentSlice,
    getDetail,
    getMy,
    getComment,
    getMyComment,
  },
});

export default store;
