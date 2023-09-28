import React, { useEffect, useState } from "react";

export default function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          if (minutes === 0 && hours === 0) {
            clearInterval(interval);
            return 0;
          }
          setMinutes((prevMinutes) => {
            if (prevMinutes === 0) {
              setHours((prevHours) => prevHours - 1);
              return 59;
            }
            return prevMinutes - 1;
          });
          return 59;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes]);

  return (
    <div className="border py-2 px-4 text-error">
      <div>{hours.toString().padStart(2, "0")}</div>
      <div>:</div>
      <div>{minutes.toString().padStart(2, "0")}</div>
      <div>:</div>
      <div>{seconds.toString().padStart(2, "0")}</div>
    </div>
  );
}
