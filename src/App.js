import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isTimerStarted, setTimerStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(0);
  const startContdownTimer = () => {
    setTimerStarted(true);
    if (time > 0) {
      const intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(intervalId);
    }
  };
  if (time <= 0) {
    clearInterval(intervalId);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        {!isTimerStarted ? (
          <input
            type="number"
            placeholder="Please insert Time here."
            onChange={(e) => setTime(e.target.value)}
            disabled={isTimerStarted}
            value={time}
          />
        ) : (
          <div>{time}</div>
        )}
        <button
          onClick={() => {
            startContdownTimer();
          }}
        >
          OK
        </button>
        <button
          onClick={() => {
            clearInterval(intervalId);
            setTimerStarted(false);
          }}
        >
          Stop
        </button>
        <button
          onClick={() => {
            clearInterval(intervalId);
            setTimerStarted(false);
            setTime(0);
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
