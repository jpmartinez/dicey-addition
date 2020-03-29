import React, { useContext, useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { DiceyAddictionContext } from "../../App";
import { COUNTDOWN_SECONDS } from "../../utils/constants";
import Button from "../controls/button/Button";
import Text from "../controls/text/Text";
import styles from "./timer.module.scss";

const getText = (timeLeft, running) => {
  return !running ? "Empezar" : `${timeLeft} segundos!`;
};

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_SECONDS);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [{ timer }, dispatch] = useContext(DiceyAddictionContext);

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
    <>
      {timer.running ? (
        <Progress timeLeft={timeLeft} running={timer.running} finished={timer.finished} />
      ) : (
        <Button
          onClick={() => {
            if (!finished) {
              dispatch({ type: "setTimer", value: { running: true } });
              setRunning(true);
            }
          }}
        >
          EMPEZAR
        </Button>
      )}
    </>
  );
}

const Progress = ({ timeLeft, running, finished }) => {
  const props = useSpring({
    from: { width: "0px" },
    to: { width: "298px" },
    config: { duration: COUNTDOWN_SECONDS * 1000 }
  });
  return (
    <div className={styles.container}>
      <Text className={styles.text}>{getText(timeLeft, running, finished)}</Text>
      <animated.div style={props} className={styles.fill} />
    </div>
  );
};
