import React from "react";
import styles from "./card.module.scss";

function Card({ children }) {
  return (
    <div className={styles.bg}>
      <div className={styles.card}>{children}</div>
    </div>
  );
}

export default Card;
