import QUERY from '../../../../constants/query';
import Axios from '../../../api/axios';
import { getCookie } from '../../../cookie';

const { createSlice, createAsyncThunk, current } = require('@reduxjs/toolkit');

const initialState = {
  getLike: [],
  isLoading: false,
  isError: false,
  error: null,
};

const axios = new Axios(process.env.REACT_APP_URL);

const cookie = getCookie(QUERY.COOKIE.COOKIE_NAME);

const option = {
  headers: {
    Authorization: `Bearer ${cookie}`,
  },
};

export const __getLike = createAsyncThunk(
  'GET_HOME',
  async (payload, thunkAPI) => {
    return await axios
      .get(`/api/liked-posts`, option)
      .then(response => thunkAPI.fulfillWithValue(response.data.result))
      .catch(error => thunkAPI.rejectWithValue());
  },
);

const getLikeSlice = createSlice({
  name: 'getLike',
  initialState,
  reducers: {
    initGetLike: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.getLike = [];
    },
    editLiked: (state, action) => {
      const { postId, likeClick } = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.getLike = [...current(state.getLike)].map(v =>
        v.id === postId
          ? {
              ...v,
              isLiked: !v.isLiked,
              postLikeCount: v.postLikeCount + (likeClick ? 1 : -1),
            }
          : v,
      );
    },
  },
  extraReducers: bulider => {
    bulider.addCase(__getLike.pending, (state, _) => {
      state.isLoading = true;
      state.isError = false;
    });
    bulider.addCase(__getLike.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.getLike = action.payload;
    });
    bulider.addCase(__getLike.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});
export const { initGetLike, editLiked } = getLikeSlice.actions;
export default getLikeSlice.reducer;
