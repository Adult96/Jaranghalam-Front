import { configureStore } from '@reduxjs/toolkit';
import getHome from '../modules/home/getHome';
import getCheckId from '../modules/inputCheck/getId';

const store = configureStore({
  reducer: {
    getHome,
    getCheckId,
  },
});

export default store;
