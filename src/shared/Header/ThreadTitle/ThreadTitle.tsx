import React from 'react';
import styles from './threadtitle.css';

interface IThreadProps {
    header: string;
}

export function ThreadTitle(props: IThreadProps) {
    return (
        <h1 className={styles.threadTitle}>{props.header}</h1>
    );
}
