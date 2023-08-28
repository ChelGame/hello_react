import React from 'react';
import styles from './messagecount.css';

interface IMesCountProps {
    count: number;
}

export function MessageCount(props: IMesCountProps) {
    return (
        <div className={`${styles.messageCount} ${(props.count > 0) ? '' : styles.empty}`}>
            {props.count}
        </div>
    );
}
