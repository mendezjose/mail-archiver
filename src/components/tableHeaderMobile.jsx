import React from "react";
import TableHeader from "./tableHeader";

class TableHeaderMobile extends TableHeader {
  render() {
    return (
      <thead>
        <tr className="mobile-header">
          <th className="mobile-headers text-secondary" colSpan="4">
            {this.props.mobileHeaders.map((column) => (
              <span
                key={column.path}
                className={this.isSortColumn(column)}
                onClick={() => this.raiseSort(column.path)}
              >
                {column.label} {this.renderSortIcon(column)}
              </span>
            ))}
          </th>
        </tr>
      </thead>
    );
  }
}

export default TableHeaderMobile;
