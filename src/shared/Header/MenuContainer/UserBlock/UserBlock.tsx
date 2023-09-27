import React from 'react';
import styles from "./userblock.css";
import Icon from "../../../../utils/react/Icon";

interface IUserProps {
    avatar?: string;
    name?: string;
}

export function UserBlock(props: IUserProps) {
    return (
        <a href={"https://www.reddit.com/api/v1/authorize?client_id=qdqQ7LBckFbRTEgZ_k9B1g&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"}
           className={styles.userBlock}>
            {
                props.avatar ?
                    <img className={styles.avatar} src={props.avatar}/> :
                    <Icon name={'anon'} className={styles.avatar}></Icon>
            }
           <p className={props.name ? styles.name : styles.anon}>{props.name || "Аноним"}</p>
        </a>
    );
}
