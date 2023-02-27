import Axios from '../../../api/axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  getDetail: {},
  isLoading: false,
  isError: false,
  error: null,
};

const axios = new Axios(process.env.REACT_APP_URL);

export const __getDetail = createAsyncThunk(
  'GET_DETAIL',
  async (payload, thunkAPI) => {
    return await axios
      .get(`/api/post/${payload}`)
      .then(response => {
        console.log(response);
        return thunkAPI.fulfillWithValue(response.data.result);
      })
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
