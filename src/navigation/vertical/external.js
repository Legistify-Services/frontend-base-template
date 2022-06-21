// ** Icons Import
import {
  Calendar,
  FileText,
  Circle,
  Archive,
  Home,
  BarChart2,
  Settings,
} from "react-feather";

export default [
  // {
  //   header: 'Apps & Pages'
  // },
  {
    id: "home",
    title: "Home",
    icon: <Home size={20} />,
    navLink: "/dashboard",
  },
  {
    id: "contracts",
    title: "Contracts",
    icon: <FileText size={20} />,
    children: [
      {
        id: "new_contract",
        title: "Add New Contract",
        icon: <Circle size={12} />,
        navLink: "/add-contract",
      },
      {
        id: "drafts",
        title: "My Drafts",
        icon: <Circle size={12} />,
        navLink: "/drafts",
      },
      {
        id: "all_contracts",
        title: "All Contracts",
        icon: <Circle size={12} />,
        navLink: "/all-contracts",
      },
    ],
  },
  {
    id: "stored_precedents",
    title: "Stored Precedents",
    icon: <Archive size={20} />,
    navLink: "/saved-precedents",
  },
  {
    id: "calendar",
    title: "Calendar",
    icon: <Calendar size={20} />,
    navLink: "/calendar",
  },
  {
    id: "mis",
    title: "MIS",
    icon: <BarChart2 size={20} />,
    navLink: "/mis",
  },
  {
    id: "settings",
    title: "Settings",
    icon: <Settings size={20} />,
    navLink: "/settings",
  },
];

// export default [
//   {
//     header: 'Apps & Pages'
//   },
//   {
//     id: 'email',
//     title: 'Email',
//     icon: <Mail size={20} />,
//     navLink: '/apps/email'
//   },
//   {
//     id: 'chat',
//     title: 'Chat',
//     icon: <MessageSquare size={20} />,
//     navLink: '/apps/chat'
//   },
//   {
//     id: 'todo',
//     title: 'Todo',
//     icon: <CheckSquare size={20} />,
//     navLink: '/apps/todo'
//   },
//   {
//     id: 'calendar',
//     title: 'Calendar',
//     icon: <Calendar size={20} />,
//     navLink: '/apps/calendar'
//   },
//   {
//     id: 'invoiceApp',
//     title: 'Invoice',
//     icon: <FileText size={20} />,
//     children: [
//       {
//         id: 'invoiceList',
//         title: 'List',
//         icon: <Circle size={12} />,
//         navLink: '/apps/invoice/list'
//       },
//       {
//         id: 'invoicePreview',
//         title: 'Preview',
//         icon: <Circle size={12} />,
//         navLink: '/apps/invoice/preview'
//       },
//       {
//         id: 'invoiceEdit',
//         title: 'Edit',
//         icon: <Circle size={12} />,
//         navLink: '/apps/invoice/edit'
//       },
//       {
//         id: 'invoiceAdd',
//         title: 'Add',
//         icon: <Circle size={12} />,
//         navLink: '/apps/invoice/add'
//       }
//     ]
//   },

//   {
//     id: 'roles-permissions',
//     title: 'Roles & Permissions',
//     icon: <Shield size={20} />,
//     children: [
//       {
//         id: 'roles',
//         title: 'Roles',
//         icon: <Circle size={12} />,
//         navLink: '/apps/roles'
//       },
//       {
//         id: 'permissions',
//         title: 'Permissions',
//         icon: <Circle size={12} />,
//         navLink: '/apps/permissions'
//       }
//     ]
//   },
//   {
//     id: 'eCommerce',
//     title: 'eCommerce',
//     icon: <ShoppingCart size={20} />,
//     children: [
//       {
//         id: 'shop',
//         title: 'Shop',
//         icon: <Circle size={12} />,
//         navLink: '/apps/ecommerce/shop'
//       },
//       {
//         id: 'detail',
//         title: 'Details',
//         icon: <Circle size={12} />,
//         navLink: '/apps/ecommerce/product-detail'
//       },
//       {
//         id: 'wishList',
//         title: 'Wish List',
//         icon: <Circle size={12} />,
//         navLink: '/apps/ecommerce/wishlist'
//       },
//       {
//         id: 'checkout',
//         title: 'Checkout',
//         icon: <Circle size={12} />,
//         navLink: '/apps/ecommerce/checkout'
//       }
//     ]
//   },
//   {
//     id: 'users',
//     title: 'User',
//     icon: <User size={20} />,
//     children: [
//       {
//         id: 'list',
//         title: 'List',
//         icon: <Circle size={12} />,
//         navLink: '/apps/user/list'
//       },
//       {
//         id: 'view',
//         title: 'View',
//         icon: <Circle size={12} />,
//         navLink: '/apps/user/view'
//       }
//     ]
//   }
// ]
