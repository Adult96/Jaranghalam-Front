import { getIdCheck } from '../../../api/login';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  isIdDone: false,
  isIdLoading: false,
  isIdError: false,
};

export const __getCheckId = createAsyncThunk(
  'GET_CHECK_ID',
  async (payload, thunkAPI) => {
    return await getIdCheck(payload)
      .then(() => thunkAPI.fulfillWithValue())
      .catch(() => thunkAPI.rejectWithValue());
  }
);

const getCheckIdSlice = createSlice({
  name: 'getCheckId',
  initialState,
  reducers: {
    initID: (state, action) => {
      console.log('init');
      state.isIdLoading = false;
      state.isIdError = false;
      state.isIdDone = false;
    },
  },
  extraReducers: bulider => {
    bulider.addCase(__getCheckId.pending, (state, _) => {
      state.isIdLoading = true;
      state.isIdError = false;
      state.isIdDone = false;
    });
    bulider.addCase(__getCheckId.fulfilled, (state, action) => {
      state.isIdLoading = false;
      state.isIdDone = true;
      state.isIdError = false;
    });
    bulider.addCase(__getCheckId.rejected, (state, action) => {
      state.isIdLoading = false;
      state.isIdDone = false;
      state.isIdError = true;
    });
  },
});
export const { initID } = getCheckIdSlice.actions;
export default getCheckIdSlice.reducer;
