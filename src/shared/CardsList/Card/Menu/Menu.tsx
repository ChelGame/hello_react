import React from 'react';
import styles from './menu.css';
import {generateId} from "../../../../utils/react/generateRandomIndex";
import {Dropdown} from "../Dropdown";
import {List} from "../../../List/List";
import {MenuIcon} from "../../../Icons";
import {Icon} from "../../../Icons/Icon";

const ItemList = [
    {value: "Скрыть"      , icon: "HideIcon", className: styles.firstItem},
    {value: "Пожаловаться", icon: "DangerIcon", className: styles.secondItem},
    {value: "Закрыть", className: styles.closeButton},
].map(generateId);

export function Menu() {
    return (
      <div className={styles.menu}>
          <Dropdown button={
              <button className={styles.menuButton}>
                  <Icon name={'MenuIcon'} size={[12, 12]}/>
              </button>}>
              <div className={styles.dropdown}>
                  <List list={ItemList}></List>
              </div>
          </Dropdown>
      </div>
  );
}
