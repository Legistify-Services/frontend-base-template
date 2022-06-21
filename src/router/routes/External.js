// ** React Imports
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Mis from "../../pages/external_user/Mis";

const DashboardExternal = lazy(() =>
  import("../../pages/external_user/externalDashboard/index")
);

const AddContract = lazy(() =>
  import("../../pages/external_user/contract/add_contract/AddContract")
);

const AllContract = lazy(() =>
  import("../../pages/external_user/contract/all_contract/AllContract")
);

const AllDraft = lazy(() =>
  import("../../pages/external_user/contract/all_drafts/AllDraft")
);

const StoredPrecedents = lazy(() =>
  import("../../pages/external_user/stored_precedent/storedPrecedent")
);

const Policy = lazy(() => import("../../pages/external_user/policy/Policy"));

const Calendar = lazy(() =>
  import("../../pages/external_user/CalenderExternal/index")
);

const AccountSettings = lazy(() =>
  import("../../pages/external_user/account-settings")
);

const Terms = lazy(() =>
  import("../../pages/external_user/termsNConditions/Terms")
);

const ExternalRoutes = [
  {
    path: "/dashboard",
    element: <DashboardExternal />,
  },
  {
    path: "/add-contract",
    element: <AddContract />,
  },
  {
    path: "/all-contracts",
    element: <AllContract />,
  },
  {
    path: "/drafts",
    element: <AllDraft />,
  },
  {
    path: "/saved-precedents",
    element: <StoredPrecedents />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/mis",
    element: <Mis />,
  },
  {
    element: <AccountSettings />,
    path: "/settings",
  },
  {
    element: <Terms />,
    path: "/terms-and-condition",
    // meta: {
    //   // appLayout: true,
    //   className: "terms-and-condition",
    // },
  },
  {
    element: <Policy />,
    path: "/privacy-policy",
    // meta: {
    //   // appLayout: true,
    //   className: "privacy-policy",
    // },
  },
  //   {
  //     element: <Email />,
  //     path: "/apps/email/:folder",
  //     meta: {
  //       appLayout: true,
  //       className: "email-application",
  //     },
  //   },
];

export default ExternalRoutes;
