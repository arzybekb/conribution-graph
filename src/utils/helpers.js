import { parseISO } from "date-fns";

export function TransformData(dates) {
  const transformedData = Object.keys(dates).map((date) => {
    return {
      date: parseISO(date),
      count: dates[date],
    };
  });
  return transformedData;
}
export function GenerateClassByCount(count) {
  if (count >= 1 && count <= 9) {
    return "color-cell-1";
  } else if (count >= 10 && count <= 19) {
    return "color-cell-2";
  } else if (count >= 20 && count <= 29) {
    return "color-cell-3";
  } else if (count >= 30) {
    return "color-cell-4";
  }
  return "color-empty";
}

export function shiftDateBack(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}
