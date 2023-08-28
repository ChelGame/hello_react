import React from 'react';
import styles from './header.css';
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "./SortBlock";
import {MenuContainer} from "./MenuContainer";

const header = "Header";

export function Header() {
    return (
        <header className={styles.header}>
            <MenuContainer />
            <ThreadTitle header={header}/>
            <SortBlock />
        </header>
    );
}
