import React, { useContext } from "react";
import { DiceyAddictionContext } from "../../App";
import { useForm } from "../../utils/hooks";
import Button from "../controls/button/Button";
import Text from "../controls/text/Text";
import styles from "./name-form.module.scss";

export default function NameForm() {
  // eslint-disable-next-line no-unused-vars
  const [_, dispatch] = useContext(DiceyAddictionContext);

  const [onSubmit, onChange, { player1, player2 }] = useForm(() =>
    dispatch({
      type: "setPlayer",
      value: { player1: { name: player1.toUpperCase() }, player2: { name: player2.toUpperCase() } },
      nextStep: "generate"
    })
  );

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.fieldContainer}>
        <label>
          <Text>¿Quién va primero?</Text>
        </label>
        <input
          className={styles.input}
          type="text"
          name="player1"
          onChange={onChange}
          value={!!player1 ? player1 : ""}
          required
        />
      </div>
      <div className={styles.fieldContainer}>
        <label>
          <Text>¿Quién va segundo?</Text>
        </label>
        <input
          className={styles.input}
          type="text"
          name="player2"
          onChange={onChange}
          value={!!player2 ? player2 : ""}
          required
        />
      </div>

      <Button type="submit">Siguiente</Button>
    </form>
  );
}
