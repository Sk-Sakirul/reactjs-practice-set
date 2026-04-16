import React, { useEffect, useState } from "react";

const ReactStopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [targetTime, setTargetTime] = useState(10);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setTime((prev) => {
        const newTime = prev + 1;

        if (newTime === Number(targetTime)) {
          // 🔊 Sound trigger (use either)
          console.log("⏰ Time reached!");

          // Optional real sound:
          // const audio = new Audio("https://www.soundjay.com/buttons/beep-07.mp3");
          // audio.play();

          setIsRunning(false); // stop timer
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning, targetTime]);

  return (
    <div className="stopwatch-container">
      <h1 className="time-display">{time} sec</h1>

      <div className="input-group">
        <label>Set Target (sec): </label>
        <input
          type="number"
          value={targetTime}
          onChange={(e) => setTargetTime(e.target.value)}
        />
      </div>

      <div className="btn-group">
        <button className="btn start" onClick={() => setIsRunning(true)}>
          Start
        </button>

        <button className="btn stop" onClick={() => setIsRunning(false)}>
          Stop
        </button>

        <button
          className="btn reset"
          onClick={() => {
            setTime(0);
            setIsRunning(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ReactStopwatch;
