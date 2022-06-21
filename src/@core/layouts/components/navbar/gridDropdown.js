import "./index.scss";

// ** Third Party Components

import { Grid } from "react-feather";
import Calendar from "@src/assets/icons/Calendar.svg";
import ContractIcon from "@src/assets/icons/ContractsIcon.svg";
import IprIcon from "@src/assets/icons/IPR Icon.svg";
import Litigation from "@src/assets/icons/Litigation.svg";
// ** Reactstrap Imports
import {
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Row,
  Col,
} from "reactstrap";

const GridDropdown = () => {
  return (
    <UncontrolledDropdown
      tag="li"
      className="dropdown-notification nav-item me-25"
    >
      <DropdownToggle
        tag="a"
        className="nav-link"
        href="/"
        onClick={(e) => e.preventDefault()}
      >
        <Grid size={21} className="ficon" />
      </DropdownToggle>
      <DropdownMenu end tag="ul" className="navigationDropdown mt-0">
        <li className="dropdown-menu-header">
          <Row className="p-2 pe-0 pb-0 g-0">
            <Col sm="6" className="p-2 ps-0 pt-0">
              <a
                href="https://corporate.legistify.com/"
                target={`_blank`}
                className="d-flex justify-content-center align-items-center flex-column gridCol"
              >
                <img src={Litigation} alt="" />
                <span>Litigation</span>
              </a>
            </Col>
            <Col sm="6" className="p-2 ps-0 pt-0">
              <a
                target={`_blank`}
                href="https://corporate.legistify.com/"
                className="d-flex justify-content-center align-items-center flex-column gridCol"
              >
                <img src={IprIcon} alt="" />
                <span>IPR</span>
              </a>
            </Col>
            <Col sm="6" className="p-2 ps-0 pt-0">
              <a
                target={`_blank`}
                href="https://contract-frontend-dev.legistrak.com/all-contracts"
                className="d-flex justify-content-center align-items-center flex-column gridCol"
              >
                <img src={ContractIcon} alt="" />
                <span>Contract</span>
              </a>
            </Col>
            <Col sm="6" className="p-2 ps-0 pt-0">
              <a
                target={`_blank`}
                href="https://corporate.legistify.com/notice-dashboard/"
                className="d-flex justify-content-center align-items-center flex-column gridCol"
              >
                <img src={Calendar} alt="" />
                <span>Notice</span>
              </a>
            </Col>
          </Row>
        </li>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default GridDropdown;
