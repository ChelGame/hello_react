import React from 'react';
import styles from './menu.css';
import {generateId} from "../../../../utils/react/generateRandomIndex";
import {Dropdown} from "../Dropdown";
import {List} from "../../../List/List";
import {MenuIcon} from "../../../Icons";
import Icon from "../../../../utils/react/Icon";


const MobileItemList = [
    {value: "Скрыть"      , icon: "hide", className: styles.firstItem, size: 12},
    {value: "Пожаловаться", icon: "danger", className: styles.secondItem, size: [14, 12] as [number, number]},
    {value: "Закрыть", className: styles.closeButton},
].map(generateId);
const DesktopItemList = [
    {value: "Комментарии" , icon: "desktopComment", className: styles.desktopMenuIconCon, iconClassName: styles.desktopMenuIcon},
    {value: "Поделиться"  , icon: "desktopShare"  , className: styles.desktopMenuIconCon, iconClassName: styles.desktopMenuIcon},
    {value: "Скрыть"      , icon: "hide"          , className: styles.desktopMenuIconCon, iconClassName: styles.desktopMenuIcon},
    {value: "Сохранить"   , icon: "desktopSave"   , className: styles.desktopMenuIconCon, iconClassName: styles.desktopMenuIcon},
    {value: "Пожаловаться", icon: "danger"        , className: styles.desktopMenuIconCon, iconClassName: styles.desktopMenuIcon},
    {value: "Закрыть"     , className: styles.closeButton},
].map(generateId);

export function Menu() {
    return (
      <div className={styles.menu}>
          <Dropdown button={
              <button className={styles.menuButton}>
                  <Icon name={'menu'} className={styles.menuIcon}/>
              </button>}>
              <div className={styles.mobileDropdown}>
                  <List list={MobileItemList}></List>
              </div>
              <div className={styles.desktopDropdown}>
                  <List list={DesktopItemList}></List>
              </div>
          </Dropdown>
      </div>
  );
}
