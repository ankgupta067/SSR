import React, { useState, useEffect } from "react";
import DigitalClock from "../src/DigitalClock";
const Index = props => {
  const [time, setTime] = useState(props.time);
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toString());
    }, 1000);
    return () => {
      cleanup;
    };
  }, []);
  return <DigitalClock time={time}></DigitalClock>;
};

Index.getInitialProps = async () => {
  const promise = new Promise((resolve, reject) => {
    setInterval(
      () =>
        resolve({
          time: new Date().toISOString()
        }),
      3000
    );
  });
  return promise;
};

export default Index;
