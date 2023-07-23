import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list-slice",
  initialState: { lists: [] },
  reducers: {
    add(state, action) {
      state.lists.push(action.payload);
    },
  },
});

export const { add } = listSlice.actions;
export default listSlice.reducer;
