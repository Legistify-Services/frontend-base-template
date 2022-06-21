import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileDetails: null,
};

const ProfiledetailsSlice = createSlice({
  name: "ProfileDetails",
  initialState,
  reducers: {
    userProfileDetails: (state, action) => {
      state.profileDetails = action.payload;
    },
  },
});

export const { userProfileDetails } = ProfiledetailsSlice.actions;
export default ProfiledetailsSlice.reducer;
