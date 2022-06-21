// ** Reducers Imports
import navbar from "./navbar";
import layout from "./layout";
import auth from "./authentication";
import todo from "@src/views/apps/todo/store";
import chat from "@src/views/apps/chat/store";
import users from "@src/views/apps/user/store";
import email from "@src/views/apps/email/store";
import invoice from "@src/views/apps/invoice/store";
import calendar from "@src/views/apps/calendar/store";
import ecommerce from "@src/views/apps/ecommerce/store";
import dataTables from "@src/views/tables/data-tables/store";
import permissions from "@src/views/apps/roles-permissions/store";

// customize reducer import :-
import calendarReducer from "@src/pages/external_user/CalenderExternal/store.js";
import misReducer from "@src/pages/external_user/Mis/store";
import alertReducer from "@src/pages/external_user/account-settings/Alerts/store";
import profileDetailReducer from "@src/pages/external_user/account-settings/store/store.js";

const rootReducer = {
  auth,
  todo,
  chat,
  email,
  users,
  navbar,
  layout,
  invoice,
  calendar,
  ecommerce,
  dataTables,
  permissions,

  // Our customize reducer :-
  calendarReducer,
  misReducer,
  alertReducer,
  profileDetailReducer,
};

export default rootReducer;
