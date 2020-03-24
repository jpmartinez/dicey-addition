import React, { useContext } from "react";
import { DiceyAddictionContext } from "../App";
import { useForm } from "../utils/hooks";
import Button from "./Button";
import styles from "./name-form.module.scss";
import Text from "./Text";

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
      <label>
        <Text>Jugador 1</Text>
      </label>
      <input
        className={styles.input}
        type="text"
        name="player1"
        onChange={onChange}
        value={!!player1 ? player1 : ""}
        required
      />
      <label>
        <Text>Jugador 2</Text>
      </label>
      <input
        className={styles.input}
        type="text"
        name="player2"
        onChange={onChange}
        value={!!player2 ? player2 : ""}
        required
      />
      <Button type="submit">Siguiente</Button>
    </form>
  );
}
