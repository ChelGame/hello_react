import React from 'react';
import styles from './controls.css';
import {Actions} from "./Actions";
import {CommentsButton} from "./CommentsButton";
import {KarmaCounter} from "./KarmaCounter";

export function Controls() {
  return (
      <div className={styles.controls}>
        <KarmaCounter />
        <CommentsButton />
        <Actions />
      </div>
  );
}
