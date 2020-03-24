import React, { useContext } from "react";
import { useDrop } from "react-dnd";
import { DiceyAddictionContext } from "../App";
import { ItemTypes } from "./constants";
import styles from "./digit-box.module.scss";
import { joinClassNames } from "./helpers";

export default function DigitBox({ id }) {
  const [{ timer, move }, dispatch] = useContext(DiceyAddictionContext);
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.DIGIT,
    drop: ({ value }) => {
      move[id] = value;
      return dispatch({ type: "setMove", value: move.splice(0) });
    },
    collect: mon => ({
      isOver: !!mon.isOver()
    }),
    canDrop: () => timer.running
  });

  return (
    <div ref={drop} className={joinClassNames(styles.digitBox, isOver && styles.isOver)}>
      {!isNaN(move[id]) ? move[id] : ""}
    </div>
  );
}