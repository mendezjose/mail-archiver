import React from "react";
import { DateRangePicker } from "react-dates";
import { isInclusivelyBeforeDay } from "react-dates";
import { useMediaQuery } from "react-responsive";
import moment from "moment";
import icon_calender from "../images/icon_calender.svg";

const CustomDateRangePicker = (props) => {
  const handleMediaQueryChange = (matches) => {
    isMobile = matches;
  };

  let isMobile = useMediaQuery(
    { maxWidth: 720 },
    undefined,
    handleMediaQueryChange
  );

  return (
    <DateRangePicker
      startDate={props.startDate}
      startDateId={"startDateId"}
      endDate={props.endDate}
      endDateId={"endDateId"}
      onDatesChange={({ startDate, endDate }) =>
        props.onDatesChange({ startDate, endDate })
      }
      focusedInput={props.focusedInput}
      onFocusChange={(focusedInput) => props.onFocusChange(focusedInput)}
      customArrowIcon={"-"}
      customInputIcon={
        <img
          src={icon_calender}
          className="icon-calender"
          alt="Date range"
        ></img>
      }
      isOutsideRange={(day) => !isInclusivelyBeforeDay(day, moment())}
      displayFormat={() => "YYYY/MM/DD"}
      orientation={isMobile ? "vertical" : "horizontal"}
    />
  );
};

export default CustomDateRangePicker;
