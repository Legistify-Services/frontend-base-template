import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import CustomTable from "../../../components/dataTable/CustomTable";

const AllDraft = () => {
  return (
    <Card className="default_card_height">
      <CardHeader className="page_main_title">All Contract</CardHeader>
      <CardBody>
        <CustomTable />
      </CardBody>
    </Card>
  );
};

export default AllDraft;
