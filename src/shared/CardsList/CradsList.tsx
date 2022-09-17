import React from 'react';
import styles from './cradslist.css';
import {Card} from "./Card";

export function CradsList() {
  return (
      <ul className={styles.cardsList}>
          <Card />
      </ul>
  );
}
