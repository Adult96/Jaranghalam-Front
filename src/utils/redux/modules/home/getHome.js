import QUERY from '../../../../constants/query';
import Axios from '../../../axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  getHome: [],
  isLoading: false,
  isError: false,
  error: null,
};

const axios = new Axios(process.env.REACT_APP_LOCAL_HOST_URL);

export const __getHome = createAsyncThunk(
  'GET_HOME',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get('/board');
      // return thunkAPI.fulfillWithValue(response.data.result);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

const getHomeSlice = createSlice({
  name: 'getHome',
  initialState,
  reducers: {},
  extraReducers: bulider => {
    bulider.addCase(__getHome.pending, (state, _) => {
      state.isLoading = true;
      state.isError = false;
    });
    bulider.addCase(__getHome.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.getHome = action.payload;
    });
    bulider.addCase(__getHome.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export default getHomeSlice.reducer;
