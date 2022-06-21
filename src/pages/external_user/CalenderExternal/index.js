// ** React Imports
import { Fragment, useState, useEffect } from "react";

// ** Third Party Components
import { Row, Col, Button } from "reactstrap";
import "./index.scss";

import { Calendar as CalendarIcon } from "react-feather";

// ** Calendar App Component Imports
import Calendar from "./Calendar";
// import SidebarLeft from "./SidebarLeft";
import AddEventSidebar from "./AddEventSidebar";

// ** Custom Hooks
import { useRTL } from "@hooks/useRTL";

// ** Store & Actions
import { useSelector, useDispatch } from "react-redux";

// ** Styles
import "@styles/react/apps/app-calendar.scss";

// My imports
import moment from "moment";
import { calendarDetails, toggleCalendarCanvas } from "./store";
// import getCalendarDetails from "../../../../api/getCalendar";
import UILoader from "@components/ui-loader";
// import CustomLoader from "../../../../Loader/CustomLoader";

// ** CalendarColors
const calendarsColor = {
  task: "primary",
  date: "success",
};

const CalendarComponent = () => {
  // ** Variables
  const dispatch = useDispatch();

  // const calendarCurrentDate = useSelector(
  //   (state) => state.calendarReducer.currentDate
  // );

  const calendarCurrentDate = moment().format(); // later get it from store

  // const allCalendarData = useSelector(
  //   (state) => state.calendarReducer.calendar
  // );

  const allCalendarData = [];

  // // My states
  const [taskCalendarData, setTaskCalendarData] = useState([]);
  const [loading, setLoading] = useState(false); // state for showing the loader

  // useEffect(() => {
  //   fetchCalendarList();
  // }, [calendarCurrentDate]);

  // useEffect(() => {
  //   renderTaskData();
  // }, [allCalendarData]);

  const currentMonth = moment(calendarCurrentDate).format("MM");
  const currentYear = moment(calendarCurrentDate).format("YYYY");

  const fetchCalendarList = async () => {
    // setLoading(true);
    // await getCalendarDetails(currentYear, currentMonth).then((response) => {
    //   dispatch(calendarDetails(response?.data?.data?.events));
    // });
    // setLoading(false);
  };

  const renderTaskData = () => {
    const taskTempArr = allCalendarData?.map((item) => {
      return {
        title:
          item.eventType === "date"
            ? `${item.fieldName}   (${_.startCase(item.contractId.name)})`
            : item.title,
        id: item._id,
        eventType: item.eventType,
        date:
          item.eventType === "date"
            ? moment(item.fieldValue).format()
            : moment(item.deadline).format(),
        url: "",
        allDay: true,
        extendedProps: {
          calendar: item.eventType === "date" ? "date" : "task",
        },
      };
    });
    setTaskCalendarData(taskTempArr);
  };

  // ** Hooks
  const [isRtl] = useRTL();

  // ** AddEventSidebar Toggle Function
  const handleAddEventCanvas = () => {
    dispatch(toggleCalendarCanvas());
  };

  return (
    <Fragment>
      <div className="d-flex justify-content-between mb-2">
        <h1>My Calendar</h1>
        <Button
          color="light_blue"
          className="filter_btns"
          onClick={handleAddEventCanvas}
        >
          <CalendarIcon size={18} /> &nbsp; {"Track New Contract Date"}
        </Button>
      </div>
      {/* <UILoader
          blocking={loading}
          loader={<CustomLoader />}
          style={{top:'10%'}}
        > */}
      <div className="app-calendar border external_calendar">
        <Row className="g-0">
          <Col className="position-relative">
            <Calendar
              isRtl={isRtl}
              calendarData={taskCalendarData}
              calendarsColor={calendarsColor}
            />
          </Col>
        </Row>
      </div>
      {/* </UILoader> */}
      <AddEventSidebar />
    </Fragment>
  );
};

export default CalendarComponent;
