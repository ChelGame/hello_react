import React, {ReactElement, ReactNode} from "react";

interface IItem {
    id: string;
    value: string;
    icon?: string;
}

interface IMyListProps {
    list: IItem[];
}

export function List ({ list }: IMyListProps) {
    return (
        <ul>
            {
                list.map((item, index) => (
                    <li key={item.id}>
                        {list[index].icon}
                        {item.value}
                    </li>
                ))
            }
        </ul>
    );
}