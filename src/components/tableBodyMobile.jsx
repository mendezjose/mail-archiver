import React from "react";
import TableBody from "./tableBody";

class TableBodyMobile extends TableBody {
  render() {
    const { data, columns, mailPreview, onPreview } = this.props;

    return (
      <React.Fragment>
        {data.map((item) => (
          <tbody
            key={item.Id}
            className="mobile-row-group"
            onClick={() => onPreview(item.Id)}
          >
            <tr className={this.isSelected(item.Id)}>
              {this.displayMailIcon(2)}
              {this.displaySimpleCell(item, columns[0])}
              {this.displayAtt(item, columns[3])}
              {this.displayDateMobile(item, columns[4])}
            </tr>
            <tr className={this.isSelected(item.Id)}>
              {this.displayTo(item, columns[1], 2)}
            </tr>
            <tr className={this.isSelected(item.Id)}>
              {this.displaySimpleCell(item, columns[2], 4)}
            </tr>
            {mailPreview === item.Id && this.displayBody(item, 5)}
          </tbody>
        ))}
      </React.Fragment>
    );
  }
}

export default TableBodyMobile;
