import { getNickNameCheck } from '../../../api/login';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  isNickNameDone: false,
  isNickNameLoading: false,
  isNickNameError: false,
};

export const __getCheckNickName = createAsyncThunk(
  'GET_CHECK_NICKNAME',
  async (payload, thunkAPI) => {
    return await getNickNameCheck(payload)
      .then(() => thunkAPI.fulfillWithValue())
      .catch(() => thunkAPI.rejectWithValue());
  }
);

const getCheckNickNameSlice = createSlice({
  name: 'getCheckNickName',
  initialState,
  reducers: {
    initNickName: (state, action) => {
      state.isNickNameLoading = false;
      state.isNickNameError = false;
      state.isNickNameDone = false;
    },
  },
  extraReducers: bulider => {
    bulider.addCase(__getCheckNickName.pending, (state, _) => {
      state.isNickNameLoading = true;
      state.isNickNameError = false;
      state.isNickNameDone = false;
    });
    bulider.addCase(__getCheckNickName.fulfilled, (state, action) => {
      state.isNickNameLoading = false;
      state.isNickNameDone = true;
      state.isNickNameError = false;
    });
    bulider.addCase(__getCheckNickName.rejected, (state, action) => {
      state.isNickNameLoading = false;
      state.isNickNameDone = false;
      state.isNickNameError = true;
    });
  },
});
export const { initNickName } = getCheckNickNameSlice.actions;
export default getCheckNickNameSlice.reducer;
