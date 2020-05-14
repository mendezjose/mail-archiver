import React from "react";
import TableBody from "./tableBody";

class TableBodyDesktop extends TableBody {
  render() {
    const { data, columns, mailPreview, onPreview } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <React.Fragment key={item.Id}>
            <tr
              className={this.isSelected(item.Id)}
              onClick={() => onPreview(item.Id)}
            >
              {columns.map((column) => this.renderCell(item, column))}
            </tr>
            {mailPreview === item.Id && this.displayBody(item, 6)}
          </React.Fragment>
        ))}
      </tbody>
    );
  }
}

export default TableBodyDesktop;
