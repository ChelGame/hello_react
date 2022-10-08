import React from "react";

interface IItem {
    value: string;
    id: string;
    onClick: (id: string) => void;
}

interface IMyListProps {
    list: IItem[];
}

export function MyList({list}: IMyListProps) {
    return (
        <ul>

        </ul>
    );
}