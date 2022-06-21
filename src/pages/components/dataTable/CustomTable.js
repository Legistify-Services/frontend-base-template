// ** Table Columns
import { data, basicColumns } from "./data";

import { SortIcon } from "@src/assets/icons/SortIcon";
import DataTable from "react-data-table-component";
import "@styles/react/libs/tables/react-dataTable-component.scss";

// ** Reactstrap Imports
import { Card } from "reactstrap";

const CustomTable = () => {
  return (
    <Card className="overflow-hidden">
      <div className="react-dataTable px-3 pt-2 pb-2">
        <DataTable
          noHeader
          pagination
          data={data}
          columns={basicColumns}
          className="react-dataTable"
          sortIcon={<SortIcon />}
          paginationRowsPerPageOptions={[10, 25, 50, 100]}
        />
      </div>
    </Card>
  );
};

export default CustomTable;
