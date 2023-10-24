import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./style.css";
import { monthsInRussian, weekDaysInRussian } from "../../utils/constants";
import { GenerateClassByCount, shiftDateBack } from "../../utils/helpers";
import { Tooltip } from "react-tooltip";
import { format } from "date-fns";

const today = new Date();

function Calendar({ data }) {
  return (
    <div className="container">
      <div className="wrapper">
        <CalendarHeatmap
          startDate={shiftDateBack(today, -365)}
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
              } contributions on ${format(value.date, "MMMM d, yyyy")}`} `,
            };
          }}
        />
        <Tooltip id="my-tooltip" />
      </div>
    </div>
  );
}

export default Calendar;