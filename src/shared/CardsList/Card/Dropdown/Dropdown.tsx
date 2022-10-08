import React, {useState} from 'react';
import styles from './dropdown.css';
import {assignId, generateId, generateRandomString} from "../../../../utils/react/generateRandomIndex";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
}

export function Dropdown({button, children}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  return (
    <div>
      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        { button }
      </div>
      {isDropdownOpen && (
          <div>
            <div onClick={() => {
              setIsDropdownOpen(false);
            }}>
              { children }
            </div>
          </div>
      )}
    </div>
  );
}

function useIsMounted() {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
            setIsMounted(true);
        }, [])
    return [isMounted];
}

const List = [
    {value: "Просмотренное"      , icon: "/src/img/icon.png"},
    {value: "Сохраненное"        , icon: "/src/img/icon.png"},
    {value: "Мои посты"          , icon: "/src/img/icon.png"},
    {value: "Прокомментированное", icon: "/src/img/icon.png"},
].map(generateId);