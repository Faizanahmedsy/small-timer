import React, { useState, useEffect } from "react";
//So we have to make a timer which is incrementes every sections

function Timer() {
  //0- We need to store secons in state
  const [seconds, setSeconds] = useState(0);
  //1- we will use set interval method to increament the time evey second
  //2- We need to use use effect here because

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((presec) => presec + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>Timer</h1>
      <p> Timer: {seconds}</p>
    </>
  );
}

export default Timer;
