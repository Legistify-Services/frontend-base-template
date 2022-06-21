// ** Redux Imports
import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
// import getAlertList from "@src/api/getAlertList";

// export const fetchBasicAlert = createAsyncThunk(
//   "alertDetails/fetchBasicAlert",
//   async () => {
//     const response = await getAlertList("basicAlert");
//     return {
//       data: response.data.alerts,
//     };
//   }
// );
// export const fetchCustomAlert = createAsyncThunk(
//   "alertDetails/fetchCustomAlert",
//   async () => {
//     const response = await getAlertList("customAlert");
//     return {
//       data: response.data.alerts,
//     };
//   }
// );

export const alertDetailsSlice = createSlice({
  name: "alertDetails",
  initialState: {
    customAlert: [],
    basicAlert: [],
    currentCustomAlert: null,
    loading: false,
    NewAlertSection: false,
  },
  reducers: {
    setCurrentCustomAlert: (state, action) => {
      state.currentCustomAlert = action.payload;
    },
    toggleNewAlertSectionCanvas: (state) => {
      state.NewAlertSection = !state.NewAlertSection;
    },
  },

  // For loader state

  // extraReducers: (builder) => {
  //   builder.addCase(fetchBasicAlert.fulfilled, (state, action) => {
  //     state.basicAlert = action.payload.data;
  //   });
  //   builder.addCase(fetchCustomAlert.fulfilled, (state, action) => {
  //     state.customAlert = action.payload.data;
  //   });
  // },
});

export const { toggleNewAlertSectionCanvas, setCurrentCustomAlert } =
  alertDetailsSlice.actions;

export default alertDetailsSlice.reducer;
