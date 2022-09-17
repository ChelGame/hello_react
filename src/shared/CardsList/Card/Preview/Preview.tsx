import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
      <div className={styles.preview}>
        <img className={styles.previewImg} src="https://cdn.dribbble.com/userupload/3401679/file/original-5aa9767ab441bd095f68285d86c10f64.png?compress=1&resize=400x300&vertical=top" />
      </div>
  );
}
