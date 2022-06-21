import { Card, CardBody, CardHeader, Button } from "reactstrap";
import CustomTable from "../../../components/dataTable/CustomTable";
import { FilePlus } from "react-feather";

const AllContract = () => {
  return (
    <div className="default_card_height card">
      {/* <div className="page_main_title">All Contract</div> */}
      <div className="d-flex justify-content-between align-item-center mb-2">
        <div className="h3 page_main_title">All Contracts</div>
        <div>
          <Button
            className="filter_btns"
            color="light_blue"
            // onClick={() => {
            //   //   dispatch(setCurrentTemplate(null));
            //   // dispatch(toggleMisSectionCanvas());
            // }}
          >
            <FilePlus size={18} /> &nbsp; Create a Template
          </Button>
        </div>
      </div>
      <Card>
        <CustomTable />
      </Card>
    </div>
  );
};

export default AllContract;
