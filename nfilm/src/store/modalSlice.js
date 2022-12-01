import { createSlice } from "@reduxjs/toolkit";

const modalInitial = { isShow: false };
const modalSlice = createSlice({
  name: "modalSlice",
  initialState: modalInitial,
  reducers: {
    showModal(state) {
      state.isShow = true;
    },
    hideModal(state) {
      state.isShow = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
