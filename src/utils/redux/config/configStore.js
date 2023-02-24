import { configureStore } from '@reduxjs/toolkit';
import postContentSlice from '../modules/postAdd';

const store = configureStore({
  reducer: {
    postContentSlice,
  },
});

export default store;
