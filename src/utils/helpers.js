import { parseISO, format, addDays } from "date-fns";

export function TransformData(dates) {
  const dateKeys = Object.keys(dates);

  if (dateKeys.length === 0) {
    return [];
  }

  dateKeys.sort();

  const transformedData = [];
  let currentDate = parseISO(dateKeys[0]);
  const endDate = parseISO(new Date().toISOString());

  while (currentDate <= endDate) {
    const currentDateISO = format(currentDate, "yyyy-MM-dd");
    const count = dates[currentDateISO] || 0;
    transformedData.push({
      date: currentDateISO,
      count: count,
    });

    currentDate = addDays(currentDate, 1);
  }
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
