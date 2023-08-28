import React, {ReactElement, ReactNode} from "react";
import {Icon} from "../Icons/Icon";

interface IItem {
    id: string;
    value: string;
    icon?: string;
    className?: string;
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
                        {(item.icon !== undefined) ? <Icon name={item.icon} size={[12, 12]}/> : ""}
                        {item.value}
                    </li>
                ))
            }
        </ul>
    );
}