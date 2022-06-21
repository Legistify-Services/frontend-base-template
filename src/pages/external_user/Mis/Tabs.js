// ** Reactstrap Imports
import { Nav, NavItem, NavLink } from "reactstrap";

// ** Icons Imports
import { Calendar, PenTool } from "react-feather";
import React from "react";

const Tabs = ({ activeTab, toggleTab }) => {
  return (
    <Nav pills className="mb-2">
      <NavItem>
        <NavLink active={activeTab === "1"} onClick={() => toggleTab("1")}>
          <Calendar size={18} className="me-50" />
          <span className="fw-bold">My Templates</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === "2"} onClick={() => toggleTab("2")}>
          <PenTool size={18} className="me-50" />
          <span className="fw-bold">MIS Logs</span>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default Tabs;
