// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import getMisTemplateList from "@src/api/getMisTemplateList";
// import getMisLogList from "@src/api/getMisLogList";

// export const fetchTemplateList = createAsyncThunk(
//   "mis/fetchTemplateList",
//   async (page) => {
//     const response = await getMisTemplateList(page);

//     return {
//       data: response.data?.templates,
//       count: response?.data?.count,
//     };
//   }
// );

// export const fetchMisLogsList = createAsyncThunk(
//   "mis/fetchMisLogsList",
//   async () => {
//     const response = await getMisLogList();

//     return {
//       data: response.data,
//     };
//   }
// );

export const misSlice = createSlice({
  name: "mis",
  initialState: {
    templateList: [],
    misLogsList: [],
    currentTemplate: null,
    newMisSection: false,
    loading: false,
    myTemplateCount: null,
  },
  reducers: {
    setCurrentTemplate: (state, action) => {
      state.currentTemplate = action.payload;
    },
    toggleMisSectionCanvas: (state) => {
      state.newMisSection = !state.newMisSection;
    },
  },

  //  For loader

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchTemplateList.fulfilled, (state, action) => {
  //       state.templateList = action.payload.data;
  //       state.myTemplateCount = action.payload.count;
  //       state.loading = false;
  //     })
  //     .addCase(fetchTemplateList.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(fetchTemplateList.rejected, (state) => {
  //       state.loading = false;
  //     });
  //   builder.addCase(fetchMisLogsList.fulfilled, (state, action) => {
  //     state.misLogsList = action.payload.data;
  //   });
  // },
});

export const { toggleMisSectionCanvas, setCurrentTemplate } = misSlice.actions;

export default misSlice.reducer;
