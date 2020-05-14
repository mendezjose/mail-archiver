import React, { Component } from "react";
import moment from "moment";
import SearchBox from "./components/searchBox";
import EmailTable from "./components/emailTable";
import { lastEmailDate } from "./services/emailService";
import "react-dates/lib/css/_datepicker.css";

class App extends Component {
  state = {
    startDate: moment(lastEmailDate()),
    endDate: moment(),
  };

  handleSearch = (startDate, endDate) => {
    this.setState({ startDate, endDate });
  };

  render() {
    return (
      <div className="main">
        <SearchBox
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onSearch={this.handleSearch}
        />
        <EmailTable
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
      </div>
    );
  }
}

export default App;
