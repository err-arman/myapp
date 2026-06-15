"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

const init = {
  time: "",
  date: "",
  timeZone: "",
};

const useClock = (timeZone) => {
  const [clock, setClock] = useState({ ...init });

  useEffect(() => {

    const intervalId = setInterval(() => {
      setClock((prev) => {
        return {
          ...prev,
          time: formatInTimeZone(new Date(), timeZone, "hh:mm:ss"),
        };
      });
    }, 1000);

    setClock((prev) => ({
      ...prev,
      date: formatInTimeZone(new Date(), timeZone, "dd-MMM-yyyy"),
      timeZone: timeZone,
    }));

    return () => clearInterval(intervalId);
  }, [timeZone]);

  return { clock };
};

export default useClock;
