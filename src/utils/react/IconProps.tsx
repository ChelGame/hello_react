import React from "react";

interface UseDynamicSVGImportOptions {
    onCompleted: (
        name: string,
        SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined
    ) => void;
    onError: (err: Error) => void;
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
    onCompleted: any;
    onError: any;
}

