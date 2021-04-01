import { useEffect, useState } from "react";

export default function GetTime() {
  const [time, setTime] = useState({ hr: "", min: "" });
  const getTime = () => {
    const hr =
      new Date().getHours() > 12
        ? new Date().getHours() - 12
        : new Date().getHours();
    const min =
      new Date().getMinutes() < 10
        ? `0${new Date().getMinutes()}`
        : new Date().getMinutes();

    setTime({ hr, min });
  };

  useEffect(() => {
    setInterval(() => {
      getTime();
    }, 1000);
    return function cleanUp() {
      clearInterval(getTime());
    };
  }, []);

  return `${time.hr}:${time.min}`;
}
