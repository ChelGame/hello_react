import React from 'react';
import styles from './messageblock.css';
import {MessageCount} from "./MessageCount";
import Icon from "../../../../utils/react/Icon";

export function MessageBlock() {
    return (
        <div className={styles.messageBlock}>
            <MessageCount count={1}/>
            <Icon name={"mail"} className={styles.messageIcon}/>
        </div>
    );
}
