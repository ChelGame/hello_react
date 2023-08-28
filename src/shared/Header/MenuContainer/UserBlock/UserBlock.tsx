import React from 'react';
import styles from "./userblock.css";

interface IUserProps {
    avatar: string;
    name: string;
}

export function UserBlock(props: IUserProps) {
    return (
        <div className={styles.userBlock}>
           <img className={styles.avatar} src={props.avatar}/>
           <p className={styles.name}>{props.name}</p>
        </div>
    );
}
