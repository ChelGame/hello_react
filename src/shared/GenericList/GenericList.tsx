import React from "react";

interface IItem {
    id: string;
    value: string;
}

interface IMyListProps {
    list: IItem[];
}

export function MyList ({ list }: IMyListProps) {
    return (
      <ul>
          {list.map((item, index) => (
              <li key={item.id}>{item.value}</li>
          ))}
      </ul>
    );
}