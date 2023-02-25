import Axios from '../../../api/axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  isDone: false,
  isLoading: false,
  isError: false,
};

const axios = new Axios(process.env.REACT_APP_LOCAL_HOST_URL);

export const __getCheckId = createAsyncThunk(
  'GET_CHECK_ID',
  async (payload, thunkAPI) => {
    return await axios
      .get(`/user/idCheck/${payload}`)
      .then(() => thunkAPI.fulfillWithValue())
      .catch(() => thunkAPI.rejectWithValue());
  }
);

const getCheckIdSlice = createSlice({
  name: 'getCheckId',
  initialState,
  reducers: {},
  extraReducers: bulider => {
    bulider.addCase(__getCheckId.pending, (state, _) => {
      state.isLoading = true;
      state.isError = false;
      state.isDone = false;
    });
    bulider.addCase(__getCheckId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isDone = true;
      state.isError = false;
    });
    bulider.addCase(__getCheckId.rejected, (state, action) => {
      state.isLoading = false;
      state.isDone = false;
      state.isError = true;
    });
  },
});

export default getCheckIdSlice.reducer;
