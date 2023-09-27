import React from 'react';
import {MessageBlock} from "./MessageBlock";
import {SearchBlock} from "./SearchBlock";
import {UserBlock} from "./UserBlock";
import styles from "./menucontainer.css";

const genAvatar = "https://sun9-west.userapi.com/sun9-52/s/v1/ig2/8GxLSMUxbvqwuicCzkdX88AtgEx4XD3iZYVT0KjP-EzL7c83UDgHFvdTnuD_xme6IJlJLwxjILmtwj_hCVftxupH.jpg?size=601x837&quality=95&type=album";

export function MenuContainer() {
    return (
        <div className={styles.menuContainer}>
            <UserBlock />
            <SearchBlock />
            <MessageBlock />
        </div>
    );
}
