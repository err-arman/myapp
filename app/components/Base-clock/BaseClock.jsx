import { useState } from "react";
import useClock from "./../../hooks/useClock";
const BaseClock = () => {
  const [timeZone, setTimeZone] = useState("America/Los_Angeles");
  const handleChange = (e) => {
    setTimeZone(e.target.value);
  };
  const { clock } = useClock(timeZone);

  return (
    <div>
      <div>
        <h1>Base Clock</h1>
        <h1> TIME: {clock.time}</h1>
        <h1> DATE: {clock.date}</h1>
        <h1> TIME ZONE: {clock.timeZone}</h1>
        <div>
          <select
            onChange={handleChange}
            defaultValue={timeZone}
            name="timezone"
            id="timezone"
          >
            <option value="UTC">UTC</option>
            <option value="Asia/Dhaka">GMT</option>
            <option value="America/Los_Angeles">PST</option>
            <option value="America/New_York">EST</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BaseClock;
