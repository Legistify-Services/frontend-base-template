// ** Reactstrap Imports
import { Card, CardHeader, CardTitle } from "reactstrap";
import CustomTable from "../../components/dataTable/CustomTable";

const MisLogs = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle tag="h4">MisLogs</CardTitle>
      </CardHeader>
      <div>
        <CustomTable />
      </div>
    </Card>
  );
};

export default MisLogs;
