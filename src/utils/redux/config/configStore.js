import { configureStore } from '@reduxjs/toolkit';
import getHome from '../modules/home/getHome';

const store = configureStore({
  reducer: {
    getHome,
  },
});

export default store;
