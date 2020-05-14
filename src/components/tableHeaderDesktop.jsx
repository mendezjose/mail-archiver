import React from "react";
import TableHeader from "./tableHeader";

class TableHeaderDesktop extends TableHeader {
  render() {
    return (
      <thead>
        <tr className="header text-secondary">
          {this.props.columns.map((column) => (
            <th
              colSpan={column.path === "To" ? "2" : "1"}
              className="header"
              key={column.path || column.key}
            >
              <span
                className={this.isSortColumn(column)}
                onClick={() => this.raiseSort(column.path)}
              >
                {column.label}
              </span>{" "}
              {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeaderDesktop;
