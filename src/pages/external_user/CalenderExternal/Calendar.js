// ** React Import
import { useRef, memo } from "react";

// ** Full Calendar & it's Plugins
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

// ** Third Party Components
import { Card, CardBody } from "reactstrap";
import { calendarCurrentDate } from "./store";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useNavigate } from "react-router-dom";
// import { currentTaskDetail, toggleTaskCanvas } from "../Contract/store";

const Calendar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const allCalendarData = useSelector(
  //   (state) => state.calendarReducer.calendar
  // );

  const allCalendarData = [];

  // ** Refs
  const calendarRef = useRef(null);

  // ** Props
  const { calendarData, isRtl, calendarsColor } = props;

  // ** calendarOptions(Props)
  const calendarOptions = {
    events: calendarData?.length ? calendarData : [],
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: "dayGridMonth",
    headerToolbar: {
      start: "sidebarToggle, prev,next, title",
      end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
    },

    eventResizableFromStart: true,

    dayMaxEvents: true,

    navLinks: true,

    eventClassNames({ event: calendarEvent }) {
      // eslint-disable-next-line no-underscore-dangle
      const colorName =
        calendarsColor[calendarEvent._def.extendedProps.calendar];

      return [
        // Background Color
        `bg-light-${colorName}`,
      ];
    },

    eventClick({ event: clickedEvent }) {
      const eventSelectedData = allCalendarData?.find(
        (item) => item._id === clickedEvent._def.publicId
      );

      if (clickedEvent._def?.extendedProps.eventType === "date") {
        navigate(`/contract/${eventSelectedData?.contractId?._id}`);
      } else {
        dispatch(toggleTaskCanvas());
        // dispatch(currentTaskDetail(eventSelectedData));
        // navigate(`/contract/${eventSelectedData?.contractId}?activeTab=5`);
      }
    },

    ref: calendarRef,

    // Get direction from app state (store)
    direction: isRtl ? "rtl" : "ltr",
  };

  return (
    <Card className="shadow-none border-0 mb-0 rounded-0 default_card_height">
      <CardBody className="pb-0">
        <FullCalendar
          {...calendarOptions}
          datesSet={(dateInfo) => {
            dispatch(
              calendarCurrentDate(moment(dateInfo.view.currentStart).format())
            );
          }}
        />
      </CardBody>
    </Card>
  );
};

export default memo(Calendar);
