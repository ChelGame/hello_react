import React from 'react';
import styles from './sharebutton.css';
import Icon from "../../../../../../utils/react/Icon";

export function ShareButton() {
    let size = 20;
    return (
        <button className={styles.shareButton}>
            <Icon name={'share'} size={size}/>
        </button>
    );
}
