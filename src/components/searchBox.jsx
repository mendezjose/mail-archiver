import React, { Component } from "react";
import CustomDateRangePicker from "./customDateRangePicker";
import "react-dates/initialize";
import icon_search from "../images/icon_search.svg";

class SearchBox extends Component {
  state = {
    startDate: this.props.startDate,
    endDate: this.props.endDate,
  };

  handleFocusChange = (focusedInput) => {
    this.setState({ focusedInput });
  };

  handleDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  render() {
    const { startDate, endDate } = this.state;

    return (
      <div className="search-box input-group">
        <CustomDateRangePicker
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          focusedInput={this.state.focusedInput}
          onFocusChange={this.handleFocusChange}
          onDatesChange={this.handleDatesChange}
        />
        <div className="input-group-append search-button">
          <button
            className="btn btn-light btn-wider"
            type="button"
            onClick={() => this.props.onSearch(startDate, endDate)}
          >
            <img
              src={icon_search}
              className="icon-magnifier"
              alt="search"
            ></img>
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBox;
