import Axios from '../../../api/axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  getDetail: {},
  isLoading: false,
  isError: false,
  error: null,
};

const axios = new Axios(process.env.REACT_APP_URL);

const option = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoaTEyMzQiLCJleHAiOjE3MDg5NTIwMDksImlhdCI6MTY3NzQxNjAwOX0.BQ1kWVIs-x7nfTBJ6l8s360nppayIhxUDMIik5p29YY`,
  },
};

export const __getDetail = createAsyncThunk(
  'GET_DETAIL',
  async (payload, thunkAPI) => {
    return await axios
      .get(`/api/posts/${payload}`, option)
      .then(response => thunkAPI.fulfillWithValue(response.data.result))
      .catch(error => thunkAPI.rejectWithValue());
  },
);

const getDetailSlice = createSlice({
  name: 'getDetail',
  initialState,
  reducers: {},
  extraReducers: bulider => {
    bulider.addCase(__getDetail.pending, (state, _) => {
      state.isLoading = true;
      state.isError = false;
    });
    bulider.addCase(__getDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.getDetail = action.payload;
    });
    bulider.addCase(__getDetail.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export default getDetailSlice.reducer;
