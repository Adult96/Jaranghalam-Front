import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const __postContent = createAsyncThunk(
  'postContent/postContent',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:4001/board', {
        title: payload.title,
        content: payload.content,
      });
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      thunkAPI.rejectWithValue();
    }
  }
);

const initialState = {
  board: {},
  isLoading: false,
  isError: false,
  error: null,
};

const postContentSlice = createSlice({
  name: 'postContent',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__postContent.fulfilled, (state, action) => {
        console.log(action.payload);
        console.log(postContentSlice);
        state.board = action.payload;
        state.isLoading = false;
      })
      .addCase(__postContent.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__postContent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default postContentSlice.reducer;
