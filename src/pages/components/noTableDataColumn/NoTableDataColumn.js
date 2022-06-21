import React from "react";
import { Table } from "reactstrap";

const NoTableDataColumn = ({ columns }) => {
  return (
    <Table className="mb-2">
      <thead>
        <tr>
          {columns?.map((item, i) => (
            <th key={i}>{item?.name}</th>
          ))}
        </tr>
      </thead>
    </Table>
  );
};

export default NoTableDataColumn;
