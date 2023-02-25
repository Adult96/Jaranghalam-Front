import { configureStore } from '@reduxjs/toolkit';
import postContentSlice from '../modules/board/postAdd';

const store = configureStore({
  reducer: {
    postContentSlice,
  },
});

export default store;
