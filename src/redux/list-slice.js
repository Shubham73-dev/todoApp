import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list-slice",
  initialState: { lists: [] },
  reducers: {
    add(state, action) {
      state.lists.push(action.payload);
    },
    // New reducer to remove an item from the lists array
    remove(state, action) {
      const indexToRemove = action.payload;
      state.lists.splice(indexToRemove, 1);
    },
  },
});

export const { add,remove } = listSlice.actions;
export default listSlice.reducer;
