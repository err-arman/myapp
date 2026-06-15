"use client";
import BaseClock from "@/app/components/Base-clock/BaseClock";
import ViewClock from "./components/ViewClock/ViewClock";
import { useState } from "react";
const getDate = () => {
  return `${new Date().getFullYear()}-${new Date().getMonth() < 10 ? `0${new Date().getMonth()}` : new Date().getMonth()}-${new Date().getDate()}`;
};
const App = () => {
  const [createdClock, setCreatedClock] = useState([]);

  const form: any = {
    clockName: "first",
    time: `${new Date().getHours() < 10 ? `0${new Date().getHours()}:${new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}` : `${new Date().getHours()}:${new Date().getMinutes()}`}`,
    date: getDate(),
    timezone: "America/Los_Angeles",
    description: "",
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setCreatedClock((prev: any) => {
      return prev.concat(form);
    });
  };


  const handleChange = (e: any) => {
    form[e.target.name] = e.target.value;
  };

  return (
    <div>
      <div>
        <BaseClock />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ flex: 1 }}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="clockName ">enter clock name</label>
            <br />
            <input
              defaultValue={form.clockName}
              onChange={handleChange}
              type="text"
              name="clockName"
              id="clockName"
            />
            <br />

            <label htmlFor="time">enter time</label>
            <br />
            <input
              onChange={handleChange}
              type="time"
              defaultValue={form.time}
              name="time"
              id="time"
            />
            <br />

            <label htmlFor="date">date</label>
            <br />
            <input
              onChange={handleChange}
              type="date"
              defaultValue={form.date}
              name="date"
              id="date"
            />
            <br />

            <br />
            <label htmlFor="timezone">
              Time zone
            </label>
            <select
              onChange={handleChange}
              defaultValue={form.timezone}
              name="timezone"
              id="timezone"
            >
              <option value="UTC">UTC</option>
              <option value="Asia/Dhaka">GMT</option>
              <option value="America/Los_Angeles">PST</option>
              <option value="America/New_York">EST</option>
            </select>
            <br />
            <label htmlFor="description">description</label>
            <br />
            <input
              onChange={handleChange}
              type="text"
              name="description"
              id="description"
            />
            <br />
            <button type="submit"> submit</button>
          </form>
        </div>

        <div style={{ flex: 1 }}>
          <ViewClock clock={createdClock} />
        </div>
      </div>
    </div>
  );
};

export default App;
