// ** Reactstrap Imports
import { Nav, NavItem, NavLink } from "reactstrap";

// ** Icons Imports
import {
  User,
  Lock,
  Bookmark,
  Link,
  Bell,
  Shield,
  UserCheck,
} from "react-feather";

const Tabs = ({ activeTab, toggleTab }) => {
  return (
    <Nav pills className="mb-2">
      {/* Account Tab */}
      <NavItem>
        <NavLink active={activeTab === "1"} onClick={() => toggleTab("1")}>
          <User size={18} className="me-50" />
          <span className="fw-bold">Account</span>
        </NavLink>
      </NavItem>

      {/* Alerts Tab */}
      <NavItem>
        <NavLink active={activeTab === "2"} onClick={() => toggleTab("2")}>
          <Bell size={18} className="me-50" />
          <span className="fw-bold">Alerts</span>
        </NavLink>
      </NavItem>

      {/* Permissions Tab */}
      <NavItem>
        <NavLink active={activeTab === "3"} onClick={() => toggleTab("3")}>
          <Shield size={18} className="me-50" />
          <span className="fw-bold">User Permissions</span>
        </NavLink>
      </NavItem>

      {/* Default Followers Tab */}
      <NavItem>
        <NavLink active={activeTab === "4"} onClick={() => toggleTab("4")}>
          <UserCheck size={18} className="me-50" />
          <span className="fw-bold">Default Followers</span>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default Tabs;
