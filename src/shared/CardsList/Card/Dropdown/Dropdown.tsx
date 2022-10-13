import React, {useState} from 'react';
import styles from './dropdown.css';
import {generateId} from "../../../../utils/react/generateRandomIndex";

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
}

export function Dropdown({button, children}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  return (
    <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {button}
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
