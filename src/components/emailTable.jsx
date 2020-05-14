import React, { Component } from "react";
import _ from "lodash";
import moment from "moment";
import emailService from "../services/emailService";
import Table from "./table";

class EmailTable extends Component {
  state = {
    sortColumn: { path: "Date", order: "asc" },
    mailPreview: null,
  };

  columns = [
    { path: "From", label: "From" },
    { path: "To", label: "To" },
    { path: "Subject", label: "Subject" },
    { path: "Att", label: "" },
    { path: "Date", label: "Date" },
  ];

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handlePreview = (itemId) => {
    if (itemId === this.state.mailPreview)
      return this.setState({ mailPreview: null });
    this.setState({ mailPreview: itemId });
  };

  filteredMail = (email) => {
    return email.filter((e) =>
      moment(e.Date).isBetween(
        this.props.startDate,
        this.props.endDate,
        "day",
        "[]"
      )
    );
  };

  sortedMail = (email) => {
    const { sortColumn } = this.state;
    if (sortColumn.path === "Date")
      return _.orderBy(email, [sortColumn.path], [sortColumn.order]).reverse();

    return _.orderBy(email, [sortColumn.path], [sortColumn.order]);
  };

  render() {
    const filtered = this.filteredMail(emailService);
    const email = this.sortedMail(filtered);

    return (
      <React.Fragment>
        <div id="email-counter">
          Results: <span id="email-number">{email.length}</span> mail(s)
        </div>
        {email.length > 0 && (
          <Table
            columns={this.columns}
            mobileHeaders={this.columns.filter((col) => col.path !== "Att")}
            data={email}
            sortColumn={this.state.sortColumn}
            mailPreview={this.state.mailPreview}
            onSort={this.handleSort}
            onPreview={this.handlePreview}
          />
        )}
        {email.length === 0 && <div id="logo-container"></div>}
      </React.Fragment>
    );
  }
}

export default EmailTable;
