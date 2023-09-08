import React from 'react';
import styles from './commentsbutton.css';
import Icon from "../../../../../utils/react/Icon";

export function CommentsButton() {
    let size = 15;
    return (
        <button className={styles.commentsButton}>
            <Icon name={'comment'} size={size}/>
            <span className={styles.commentsNumber}>12</span>
        </button>
    );
}
