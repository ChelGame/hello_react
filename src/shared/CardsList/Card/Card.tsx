import React from 'react';
import styles from './card.css';
import {Controls} from "./Controls";
import {Menu} from "./Menu";
import {Preview} from "./Preview";
import {TextContent} from "./TextContent";
import {Dropdown} from "./Dropdown";
import {generateId} from "../../../utils/react/generateRandomIndex";
import {MyList} from "../../GenericList/GenericList";
const List = [
    {value: "Просмотренное"      , icon: "/src/img/icon.png"},
    {value: "Сохраненное"        , icon: "/src/img/icon.png"},
    {value: "Мои посты"          , icon: "/src/img/icon.png"},
    {value: "Прокомментированное", icon: "/src/img/icon.png"},
].map(generateId);

export function Card() {
  return (
      <li className={styles.card}>
          <TextContent />
          <Preview />
          <Menu />
          <Controls />
          <Dropdown button={<button>Test</button>}>
              <MyList list={List}/>
          </Dropdown>
      </li>
  );
}
