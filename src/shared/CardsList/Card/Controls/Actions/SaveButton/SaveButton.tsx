import React from 'react';
import styles from './savebutton.css';
import Icon from "../../../../../../utils/react/Icon";

export function SaveButton() {
    let size = 20;
    return (
        <button className={styles.saveButton}>
            <Icon name={'save'} size={size}/>
        </button>
    );
}
