import React, {ReactElement, ReactNode} from "react";
import Icon from "../../utils/react/Icon";

interface IItem {
    id: string;
    value: string;
    icon?: string;
    className?: string;
    size?: number | [number,number];
}

interface IMyListProps {
    list: IItem[];
}

export function List ({ list }: IMyListProps) {
    return (
        <ul>
            {
                list.map((item, index) => (
                    <li className={(item.className) ? item.className : ""} key={item.id}>
                        {(item.icon !== undefined) ? <Icon name={item.icon} size={item.size || undefined} /> : ""}
                        {item.value}
                    </li>
                ))
            }
        </ul>
    );
}