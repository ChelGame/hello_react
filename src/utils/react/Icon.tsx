import React from "react";

interface IconProps {
    name: string;
    size?: number | [number, number];
    className?: string;
    onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, className, onClick }) => {
    let width:number = 12;
    let height:number = 12;

    if (size) {
        width = (typeof size === "number") ? size : size[0];
        height = (typeof size === "number") ? size : size[1];
    }
    try {
        let SvgIcon = require(`../../img/${name}.svg`).default;
        let defaultWidth = SvgIcon.toString().match(/width: \d+ ?/)[0].split(" ")[1];
        let defaultHeight = SvgIcon.toString().match(/height: \d+ ?/)[0].split(" ")[1];

        return (
            <div style={{width: `${width}px`, height: `${height}px`, display: "flex", justifyContent: "center", alignItems: "center"}}>
                <SvgIcon
                    className={`icon ${className || ""}`}
                    onClick={onClick}
                    width={width}
                    height={height}
                    viewBox={`0 0 ${defaultWidth} ${defaultHeight}`}
                />
            </div>
        );
    } catch (e) {
        console.log(e);
        let SvgIcon = require(`../../img/hide.svg`).default;

        let defaultWidth = 12;
        let defaultHeight = 12;

        return (
            <div style={{width: `${width}px`, height: `${height}px`}}>
                <SvgIcon
                    className={`icon ${className || ""}`}
                    onClick={onClick}
                    viewBox={`0 0 ${defaultWidth} ${defaultHeight}`}
                    width={width}
                    height={height}
                />
            </div>
        );
    }

};



export default Icon;