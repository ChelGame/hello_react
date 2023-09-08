import React from 'react';
import styles from './cradslist.css';
import {Card} from "./Card";
import {MyList} from "../GenericList/GenericList";
import {Dropdown} from "./Card/Dropdown";
import {generateId} from "../../utils/react/generateRandomIndex";
import {Simulate} from "react-dom/test-utils";
import contextMenu = Simulate.contextMenu;
import Icon from "../../utils/react/Icon";

const List = [
    {value: "Просмотренное"      , icon: ""},
    {value: "Сохраненное"        , icon: ""},
    {value: "Мои посты"          , icon: ""},
    {value: "Прокомментированное", icon: ""},
].map(generateId);

export function CardsList() {
    return (
          <ul className={styles.cardsList}>
              <Dropdown button={<button disabled></button>}>
                  <MyList list={List}/>
              </Dropdown>
              <Card />
              {/*<Icon name="MenuIcon"/>*/}
          </ul>
    );
}
