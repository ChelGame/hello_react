import React from 'react';
import styles from './metadata.css';

export function MetaData() {
  return (
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar} src="https://sun9-west.userapi.com/sun9-52/s/v1/ig2/8GxLSMUxbvqwuicCzkdX88AtgEx4XD3iZYVT0KjP-EzL7c83UDgHFvdTnuD_xme6IJlJLwxjILmtwj_hCVftxupH.jpg?size=601x837&quality=95&type=album" alt="Avatar"/>
          <a href="#user-url" className={styles.username}>Дмитрий Грицин</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано</span> 4 часа назад
        </span>
      </div>
  );
}
