import React from 'react';
import styles from './cradslist.css';
import {Card} from "./Card";
import {MyList} from "../GenericList/GenericList";
import {Dropdown} from "./Card/Dropdown";
import {generateId} from "../../utils/react/generateRandomIndex";
import {Simulate} from "react-dom/test-utils";
import contextMenu = Simulate.contextMenu;

const List = [
    {value: "Просмотренное"      , icon: "/src/img/icon.png"},
    {value: "Сохраненное"        , icon: "/src/img/icon.png"},
    {value: "Мои посты"          , icon: "/src/img/icon.png"},
    {value: "Прокомментированное", icon: "/src/img/icon.png"},
].map(generateId);

export function CardsList() {
    return (
          <ul className={styles.cardsList}>
              <Dropdown button={<button disabled></button>}>
                  <MyList list={List}/>
              </Dropdown>
              <Card />
          </ul>
    );
}
