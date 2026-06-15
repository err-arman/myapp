import React from "react";

interface CreatedClockProps {
  clockName: string;
  date: string;
  time: string;
  desciption: string;
  timezone: string;
}

interface ViewClockprops {
  clock: CreatedClockProps[];
}

import {
  converDateTimeToMyZone,
  convertToDate,
  convertToTime,
} from "@/app/utils/convertTime.js";

const ViewClock = ({ clock }: ViewClockprops) => {
  return (
    <div>
      <h1>client Clock</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "100x",
        }}
      >
        {clock?.map((item: CreatedClockProps, index) => {
          return (
            <div style={{ width: "25%" }} key={index}>
              <p>clock name: {item.clockName}</p>
              <p> TIME: {item.time}</p>
              <p> DATE: {item.date}</p>
              <p> TIME ZONE: {item.timezone}</p>
              <p> Description: {item.desciption}</p>
              <p>
                In my time:{" "}
                {convertToTime(
                  converDateTimeToMyZone(item.time, item.date, item.timezone),
                )}
              </p>
              <p>
                my date:{" "}
                {convertToDate(
                  converDateTimeToMyZone(item.time, item.date, item.timezone),
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewClock;
