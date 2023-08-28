import React from 'react';
import styles from './messageblock.css';
import {MessageCount} from "./MessageCount";
import {MessageIcon} from "./MessageIcon";

export function MessageBlock() {
    return (
        <div className={styles.messageBlock}>
            <MessageCount count={1}/>
            <MessageIcon />
        </div>
    );
}
