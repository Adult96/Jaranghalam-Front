import QUERY from '../../../../constants/query';
import Axios from '../../../api/axios';
import { getCookie } from '../../../cookie';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  getMy: [],
  isLoading: false,
  isError: false,
  error: null,
};

const axios = new Axios(process.env.REACT_APP_URL);

export const __getMy = createAsyncThunk('GET_MY', async (payload, thunkAPI) => {
  const cookie = getCookie(QUERY.COOKIE.COOKIE_NAME);
  const option = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoaTEyMzQiLCJleHAiOjE3MDg5NTIwMDksImlhdCI6MTY3NzQxNjAwOX0.BQ1kWVIs-x7nfTBJ6l8s360nppayIhxUDMIik5p29YY`,
    },
  };
  return await axios
    .get(`/api/post/myPostList`, option)
    .then(response => thunkAPI.fulfillWithValue(response.data.result))
    .catch(error => thunkAPI.rejectWithValue());
});

const getMySlice = createSlice({
  name: 'getMy',
  initialState,
  reducers: {},
  extraReducers: bulider => {
    bulider.addCase(__getMy.pending, (state, _) => {
      state.isLoading = true;
      state.isError = false;
    });
    bulider.addCase(__getMy.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.getMy = action.payload;
    });
    bulider.addCase(__getMy.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export default getMySlice.reducer;
