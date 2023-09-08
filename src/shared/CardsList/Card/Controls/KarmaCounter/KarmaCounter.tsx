import React from 'react';
import styles from './karmacounter.css';
import Icon from "../../../../../utils/react/Icon";

export function KarmaCounter() {
    let size:[number, number] = [19, 10];
  return (
      <div className={styles.karmaCounter}>
          <button className={styles.up}>
              <Icon name={'arrow'} size={size} />
          </button>

          <span className={styles.karmaValue}>231</span>

          <button className={styles.down}>
              <Icon name={'arrow'} size={size}/>
          </button>
      </div>
  );
}
