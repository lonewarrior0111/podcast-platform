import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  podcasts: [],
};

const podcastSlice = createSlice({
  name: "podcasts",
  initialState,
  reducers: {
    setPodcasts: (state, action) => {
      state.podcasts = action.payload;
    },
    clearPodcasts: (state) => {
      state.podcasts = null;
    },
  },
});

export const { setPodcasts, clearPodcasts } = podcastSlice.actions;
export default podcastSlice.reducer;
