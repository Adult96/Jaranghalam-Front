import QUERY from '../../../../constants/query';
import Axios from '../../../api/axios';
import { getCookie } from '../../../cookie';

const { createSlice, createAsyncThunk, current } = require('@reduxjs/toolkit');

const initialState = {
  getMy: [],
  isMyLoading: false,
  isMyError: false,
  error: null,
};

const axios = new Axios(process.env.REACT_APP_URL);

export const __getMy = createAsyncThunk('GET_MY', async (payload, thunkAPI) => {
  const cookie = getCookie(QUERY.COOKIE.COOKIE_NAME);
  const option = {
    headers: {
      Authorization: `Bearer ${cookie}`,
    },
  };
  return await axios
    .get(`/api/posts/my-post-list`, option)
    .then(response => thunkAPI.fulfillWithValue(response.data.result))
    .catch(error => thunkAPI.rejectWithValue());
});

const getMySlice = createSlice({
  name: 'getMy',
  initialState,
  reducers: {
    initMy: (state, action) => {
      state.isMyLoading = false;
      state.isMyError = false;
    },
    editMy: (state, action) => {
      const { postId, likeCnt } = action.payload;
      state.isMyLoading = false;
      state.isMyError = false;
      state.getMy = [...current(state.getMy)].map(v =>
        v.id === postId
          ? {
              ...v,
              isLiked: !v.isLiked,
              postLikeCount: likeCnt,
            }
          : v,
      );
    },
  },
  extraReducers: bulider => {
    bulider.addCase(__getMy.pending, (state, _) => {
      state.isMyLoading = true;
      state.isMyError = false;
    });
    bulider.addCase(__getMy.fulfilled, (state, action) => {
      state.isMyLoading = false;
      state.isMyError = false;
      state.getMy = action.payload;
    });
    bulider.addCase(__getMy.rejected, (state, action) => {
      state.isMyLoading = false;
      state.isMyError = true;
      state.error = action.payload;
    });
  },
});

export const { initMy, editMy } = getMySlice.actions;
export default getMySlice.reducer;
