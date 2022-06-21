// ** Reactstrap Imports
import { Card, CardHeader, CardTitle } from "reactstrap";
import CustomTable from "../../components/dataTable/CustomTable";

const MyTemplates = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle tag="h4">My Templates</CardTitle>
      </CardHeader>

      <div>
        <CustomTable />
      </div>
    </Card>
  );
};

export default MyTemplates;
