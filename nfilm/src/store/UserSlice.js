import { createSlice } from "@reduxjs/toolkit";

const userInitial = { userInfor: {} };
const UserSlice = createSlice({
  name: "userSlice",
  initialState: userInitial,
  reducers: {
    login(state, action) {
      state.userInfor = action.payload;
      sessionStorage.setItem("currentUser", `${action.payload.email}`);
    },

    logout(state) {
      state.userInfor = {};
      sessionStorage.removeItem("currentUser");
    },
  },
});

export const UserActions = UserSlice.actions;
export default UserSlice.reducer;
