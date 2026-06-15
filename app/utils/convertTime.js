import { parse } from "date-fns";
import { formatInTimeZone, fromZonedTime } from "date-fns-tz";

export const converDateTimeToMyZone = (time, date, timezone = "") => {
  const targetTimezone = "Asia/Dhaka";
  const dateTime = `${date} ${time}`;
  const zonedTIme = fromZonedTime(dateTime, timezone);
  const formateToTimeZone = formatInTimeZone(
    zonedTIme,
    targetTimezone,
    "hh:mm a dd/MM/yyyy",
  );

  return formateToTimeZone;
};

export const convertToTime = (datetime) => {
  console.log("datetime", datetime);

  return datetime.split(" ").slice(0, 2).join(" ");
};


export const convertToDate = (datetime) => {
  return datetime.split(' ').slice(2, 10).join(' ')
}