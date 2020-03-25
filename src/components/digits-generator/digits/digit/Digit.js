import React from "react";
import { useDrag } from "react-dnd";
import { animated, useSpring } from "react-spring";
import { ItemTypes } from "../../../../utils/constants";
import { joinClassNames } from "../../../../utils/helpers";
import styles from "./digit.module.scss";

export default function Digit({ value, canDrag }) {
  const props = useSpring({
    from: { number: 0 },
    to: { number: isNaN(value) ? 0 : value },
    config: { duration: 500 }
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.DIGIT, value },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
      value
    }),
    canDrag: () => !isNaN(value)
  });

  return (
    <div className={joinClassNames(styles.digit, isDragging && styles.dragging)} ref={drag}>
      {!isNaN(value) ? <animated.span>{props.number.interpolate(number => Math.floor(number))}</animated.span> : "?"}
    </div>
  );
}
