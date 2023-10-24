import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "react-tooltip/dist/react-tooltip.css";
import "./style.css";
import { monthsInRussian, weekDaysInRussian } from "../../utils/constants";
import { GenerateClassByCount, shiftDateBack } from "../../utils/helpers";
import { Tooltip } from "react-tooltip";
import { format } from "date-fns";
import Hint from "./Hint";

const today = new Date();

function Calendar({ data }) {
  return (
    <div className="container">
      <div className="wrapper">
        <CalendarHeatmap
          startDate={shiftDateBack(today, -357)}
          endDate={today}
          values={data}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return GenerateClassByCount(value.count);
          }}
          showWeekdayLabels={true}
          weekdayLabels={weekDaysInRussian}
          monthLabels={monthsInRussian}
          tooltipDataAttrs={(value) => {
            if (!value || value.count === null) {
              return {
                "data-tooltip-content": "No contributions",
                "data-tooltip-id": "my-tooltip",
              };
            }
            return {
              "data-tooltip-id": "my-tooltip",
              "data-tooltip-content": `${`${
                value.count
              } contributions on ${format(
                new Date(value.date),
                "MMMM d, yyyy"
              )}`} `,
            };
          }}
        />
        <Hint />
        <Tooltip id="my-tooltip" />
      </div>
    </div>
  );
}

export default Calendar;
