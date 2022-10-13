import React from "react";
import styles from './GenericList.css';

interface IItem {
    id: string;
    value: string;
}

interface IMyListProps {
    list: IItem[];
}

export function MyList ({ list }: IMyListProps) {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(list[0]);

    return (
      <ul onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {!isDropdownOpen && (
              <li key={selectedItem.id}>{selectedItem.value}</li>
          ) || (
              list.map((item, index) => (

                  <li onClick={(item) => {
                      (isDropdownOpen) ? setSelectedItem(list[index]) : setSelectedItem(selectedItem);
                  }} key={item.id}>{item.value}</li>
              ))
          )}
      </ul>
    );
}