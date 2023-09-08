import React from 'react';
import styles from './messageblock.css';
import {MessageCount} from "./MessageCount";
import Icon from "../../../../utils/react/Icon";

export function MessageBlock() {
    let size:[number, number] = [13, 11];
    return (
        <div className={styles.messageBlock}>
            <MessageCount count={1}/>
            <Icon name={"mail"} size={size}/>
        </div>
    );
}
