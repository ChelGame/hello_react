import React from 'react';
import styles from './menu.css';
import {generateId} from "../../../../utils/react/generateRandomIndex";
import {Dropdown} from "../Dropdown";
import {List} from "../../../List/List";
import {MenuIcon} from "../../../Icons";
import Icon from "../../../../utils/react/Icon";


const ItemList = [
    {value: "Скрыть"      , icon: "hide", className: styles.firstItem, size: 12},
    {value: "Пожаловаться", icon: "danger", className: styles.secondItem, size: [14, 12] as [number, number]},
    {value: "Закрыть", className: styles.closeButton},
].map(generateId);

export function Menu() {
    return (
      <div className={styles.menu}>
          <Dropdown button={
              <button className={styles.menuButton}>
                  <Icon name={'menu'} size={25} />
              </button>}>
              <div className={styles.dropdown}>
                  <List list={ItemList}></List>
              </div>
          </Dropdown>
      </div>
  );
}
