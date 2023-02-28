import QUERY from '../../../../constants/query';
import Axios from '../../../api/axios';
import { getCookie } from '../../../cookie';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  getMyComment: [],
  isMyComntLoading: false,
  isMyComntError: false,
  error: null,
};

const axios = new Axios(process.env.REACT_APP_URL);

export const __getMyComment = createAsyncThunk(
  'GET_MY_COMMENT',
  async (payload, thunkAPI) => {
    const cookie = getCookie(QUERY.COOKIE.COOKIE_NAME);
    const option = {
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    };
    return await axios
      .get(`/api/comments/my-comment-list`, option)
      .then(response => thunkAPI.fulfillWithValue(response.data.result))
      .catch(error => thunkAPI.rejectWithValue());
  },
);

const getMyCommentSlice = createSlice({
  name: 'getMyComment',
  initialState,
  reducers: {
    initMyComnt: (state, action) => {
      state.isMyComntLoading = false;
      state.isMyComntError = false;
      state.isMyComntDone = false;
      state.getMyComment = [];
    },
  },
  extraReducers: bulider => {
    bulider.addCase(__getMyComment.pending, (state, _) => {
      state.isMyComntLoading = true;
      state.isMyComntError = false;
    });
    bulider.addCase(__getMyComment.fulfilled, (state, action) => {
      state.isMyComntLoading = false;
      state.isMyComntError = false;
      state.getMyComment = action.payload;
    });
    bulider.addCase(__getMyComment.rejected, (state, action) => {
      state.isMyComntLoading = false;
      state.isMyComntError = true;
      state.error = action.payload;
    });
  },
});

export const { initMyComnt } = getMyCommentSlice.actions;
export default getMyCommentSlice.reducer;
