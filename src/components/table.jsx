import React from "react";
import TableHeaderDesktop from "./tableHeaderDesktop";
import TableBodyDesktop from "./tableBodyDesktop";
import TableHeaderMobile from "./tableHeaderMobile";
import TableBodyMobile from "./tableBodyMobile";

const Table = ({
  columns,
  mobileHeaders,
  sortColumn,
  mailPreview,
  onSort,
  onPreview,
  data,
}) => {
  return (
    <React.Fragment>
      <table className="table table-desktop">
        <TableHeaderDesktop
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBodyDesktop
          columns={columns}
          sortColumn={sortColumn}
          data={data}
          mailPreview={mailPreview}
          onPreview={onPreview}
        />
      </table>
      <table className="table table-mobile">
        <TableHeaderMobile
          columns={columns}
          mobileHeaders={mobileHeaders}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBodyMobile
          columns={columns}
          sortColumn={sortColumn}
          data={data}
          mailPreview={mailPreview}
          onPreview={onPreview}
        />
      </table>
    </React.Fragment>
  );
};

export default Table;
