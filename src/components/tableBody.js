import React, { Component } from "react";
import moment from "moment";
import _ from "lodash";
import icon_clip from "../images/icon_clip.svg";
import icon_mail_sp from "../images/icon_mail_sp.svg";
import icon_arrow02 from "../images/icon_arrow02.svg";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.path === "To") return this.displayTo(item, column);
    if (column.path === "Att") return this.displayAtt(item, column);
    if (column.path === "Date") return this.displayDate(item, column);
    return this.displaySimpleCell(item, column);
  };

  displaySimpleCell = (item, column, colspan = 1) => {
    return (
      <td
        key={item.Id + column.path}
        className={this.isSortColumn(column)}
        colSpan={colspan}
      >
        {_.get(item, column.path)}
      </td>
    );
  };

  displayTo = (item, column, colspan = 1) => {
    return (
      <React.Fragment key={item.Id + column.path}>
        <td className={this.isSortColumn(column)} colSpan={colspan}>
          {item.To.join(", ")}
        </td>
        <td className="To-badge">{this.displayBadge(item.To)}</td>
      </React.Fragment>
    );
  };

  displayAtt = (item, column) => {
    return (
      <td key={item.Id + column.path} className={this.isSortColumn(column)}>
        {item["Att"] === true && (
          <img src={icon_clip} className="icon-clip" alt="Att"></img>
        )}
      </td>
    );
  };

  displayDate = (item, column) => {
    let output;
    const date = item.Date;
    if (moment().diff(moment(date), "hours") < 24) {
      output = moment(date).format("HH:mm");
    } else if (date.isSame(moment(), "month")) {
      output = date.format("MMM D");
    } else output = date.format("YY[/]MM[/]D");
    return (
      <td key={item.Id + column.path} className={this.isSortColumn(column)}>
        {output}
      </td>
    );
  };

  displayDateMobile = (item, column) => {
    const date = item.Date;
    let output;
    if (moment().diff(moment(date), "hours") < 24) {
      output = moment(date).format("HH:mm");
    } else output = moment(date).format("MMM D");

    return (
      <td className={this.isSortColumn(column)}>
        {output}{" "}
        <img className="icon-arrow" src={icon_arrow02} alt="Date"></img>
      </td>
    );
  };

  displayBody = (item, colspan) => {
    return (
      <tr>
        <td className="mail-preview selected-item" colSpan={colspan}>
          {item.Body}
        </td>
      </tr>
    );
  };

  createKey = (item, column) => {
    return item.id + (column.path || column.key);
  };

  isSelected = (itemId) => {
    return itemId === this.props.mailPreview
      ? "selected-item clickable"
      : "clickable";
  };

  isSortColumn = (column) => {
    return column.path === this.props.sortColumn.path
      ? column.path + " sort-column"
      : column.path;
  };

  displayBadge = (to) => {
    if (to.length > 1)
      return (
        <span className="badge badge-secondary"> {` +${to.length - 1} `}</span>
      );
  };

  displayMailIcon = (rowspan) => {
    return (
      <td className="icon-mail-cell" rowSpan={rowspan}>
        <img src={icon_mail_sp} className="icon-mail" alt="Email"></img>
      </td>
    );
  };
}

export default TableBody;
