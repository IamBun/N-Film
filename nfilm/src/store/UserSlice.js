import { createSlice } from "@reduxjs/toolkit";

const userInitial = { userInfor: {} };
const UserSlice = createSlice({
  name: "userSlice",
  initialState: userInitial,
  reducers: {
    login(state, action) {
      state.userInfor = action.payload;
    },

    logout(state) {
      state.userInfor = {};
    },
  },
});

export const UserActions = UserSlice.actions;
export default UserSlice.reducer;
