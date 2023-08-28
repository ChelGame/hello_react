import React from 'react';
import {HideIcon} from "./HideIcon";
import {DangerIcon} from "./DangerIcon";
import {MenuIcon} from "./MenuIcon";

interface IIconProps {
    // name: "MenuIcon" | "DangerIcon" | "HideIcon";
    name: string;
    size?: number | [number, number];
}

// function getIcon(name: "MenuIcon" | "DangerIcon" | "HideIcon") {
function getIcon(name: string) {
    switch (name) {
        case 'MenuIcon':
            return <MenuIcon />
        case 'DangerIcon':
            return <DangerIcon />
        case 'HideIcon':
            return <HideIcon />
    }
}

export function Icon(props: IIconProps) {
    if (typeof props.size === "undefined") console.log('undefined');
    if (typeof props.size === "number") console.log('number');
    if (typeof props.size === "object") console.log("obj");
    let result = getIcon(props.name);
    console.log(result);
    return (
        <div>{result}</div>
    );
}