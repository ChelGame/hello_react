import React from 'react';
import styles from './searchblock.css';
import Icon from "../../../../utils/react/Icon";

export function SearchBlock() {
    return (
        <form className={styles.searchBlock} method="post" action="/">
            <button className={styles.searchBut} type="submit">
                <Icon name={"search"} className={styles.searchIcon}/>
            </button>
            <input className={styles.search} type="text" placeholder="Поиск"/>
        </form>
    );
}
