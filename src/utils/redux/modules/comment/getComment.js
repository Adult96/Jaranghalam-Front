import Axios from '../../../api/axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  getComment: [],
  isLoading: false,
  isError: false,
  error: null,
};

const axios = new Axios(process.env.REACT_APP_URL);

export const __getComment = createAsyncThunk(
  'GET_COMMENT',
  async (payload, thunkAPI) => {
    return await axios
      .get(`/api/comments/${payload}`)
      .then(response => thunkAPI.fulfillWithValue(response.data.result))
      .catch(error => thunkAPI.rejectWithValue());
  },
);

const getCommentSlice = createSlice({
  name: 'getComment',
  initialState,
  reducers: {},
  extraReducers: bulider => {
    bulider.addCase(__getComment.pending, (state, _) => {
      state.isLoading = true;
      state.isError = false;
    });
    bulider.addCase(__getComment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.getComment = action.payload;
    });
    bulider.addCase(__getComment.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export default getCommentSlice.reducer;
