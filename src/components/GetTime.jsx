import React from "react";

const GetTime = () => {
  const [currentTime, setCurrentTime] = React.useState("");

  const updateTimeFunction = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  };

  React.useEffect(() => {
    const intervalId = setInterval(updateTimeFunction, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App" id="body">
      <h2>Hello</h2>
      <h4>Time: {currentTime} </h4>
    </div>
  );
};

export default GetTime;
