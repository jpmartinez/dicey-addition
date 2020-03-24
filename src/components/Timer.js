import React, { useContext, useEffect, useState } from "react";
import { DiceyAddictionContext } from "../App";
import Button from "./Button";
import { joinClassNames } from "./helpers";
import styles from "./timer.module.scss";

const COUNTDOWN_SECONDS = 15;

const getText = (timeLeft, running, finished) => {
  if (!finished && !running) {
    return "EMPEZAR";
  } else if (finished) {
    return "TIEMPO!";
  } else {
    return `${timeLeft} SEGUNDOS!`;
  }
};

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_SECONDS);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [_, dispatch] = useContext(DiceyAddictionContext);

  useEffect(() => {
    let interval;
    if (timeLeft && running) {
      interval = setInterval(() => {
        setTimeLeft(currentSecond => {
          if (currentSecond <= 1) {
            setRunning(false);
            setFinished(true);
            clearInterval(interval);
            return COUNTDOWN_SECONDS;
          } else {
            setRunning(true);
            return currentSecond - 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running, timeLeft]);

  useEffect(() => dispatch({ type: "setTimer", value: { running, finished } }), [running, finished, dispatch]);

  return (
    <Button
      className={joinClassNames(styles.notRunning, (running || finished) && styles.running)}
      onClick={() => !finished && setRunning(true)}
    >
      {getText(timeLeft, running, finished)}
    </Button>
  );
}
