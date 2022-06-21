import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  calendar: null,
  currentDate: moment().format(),
  calendarCanvas: false,
};

const CalendarSlice = createSlice({
  name: "Calendar",
  initialState,
  reducers: {
    calendarDetails: (state, action) => {
      state.calendar = action.payload;
    },
    calendarCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    },
    toggleCalendarCanvas: (state) => {
      state.calendarCanvas = !state.calendarCanvas;
    },
  },
});

export const { calendarDetails, calendarCurrentDate, toggleCalendarCanvas } =
  CalendarSlice.actions;
export default CalendarSlice.reducer;
