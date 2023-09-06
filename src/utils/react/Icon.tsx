import React, {useEffect, useRef, useState} from "react";
import { lazy, Suspense } from 'react';

// interface IIconProps {
//     name: string;
//     size?: number | [number, number];
// }

// export default function Icon(props: IIconProps) {
//     const Icon = lazy(() => import(`../../shared/Icons/${props.name}`));
//     console.log(<Icon/>);
//     return (
//         <Suspense fallback={<></>}>
//             <Icon/>
//         </Suspense>
//     );
// }


interface SVGIconProps {
    width: string | number;
    name: string;
}

const SvgIcon: React.FC<SVGIconProps> =(props:SVGIconProps) =>
{
    const Icon = require(`../../img/${props.name}.svg`).default
    return <Icon width={props.width}/>
};

export default SvgIcon;

// interface SVGIconProps {
//     width: string | number;
//     name: string;
// }
//
// const Icon: React.FC<SVGIconProps> = (props: SVGIconProps) => {
//     const [element, setElement] = React.useState<JSX.Element>(<></>);
//
//     React.useEffect(() => {
//         import(`../../img/${props.name}.svg`).then((res) => {
//             const Svg = res.ReactComponent as React.ComponentType<JSX.IntrinsicElements['svg']>;
//             setElement(<Svg  width={props.width} />);
//         });
//     }, [props.name, props.width]);
//
//     return element;
// };
//
// export default Icon;








// interface UseDynamicSVGImportOptions {
//     onCompleted?: (
//         name: string,
//         SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined
//     ) => void;
//     onError?: (err: Error) => void;
// }
//
// function useDynamicSVGImport(name: string, options: UseDynamicSVGImportOptions = {}) {
//     const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState<Error>();
//
//     const { onCompleted, onError } = options;
//     useEffect(() => {
//         setLoading(true);
//         const importIcon = async (): Promise<void> => {
//             try {
//                 ImportedIconRef.current = (
//                     await import(`../../img/${name}.svg`)
//                 ).ReactComponent;
//                 onCompleted?.(name, ImportedIconRef.current);
//             } catch (err) {
//                 console.log(err);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         importIcon();
//     }, [name, onCompleted, onError]);
//
//     return { error, loading, SvgIcon: ImportedIconRef.current };
// }
//
// interface IconProps extends React.SVGProps<SVGSVGElement> {
//     name: string;
//     onCompleted?: UseDynamicSVGImportOptions["onCompleted"];
//     onError: UseDynamicSVGImportOptions["onError"] | undefined;
// }
//
// /**
//  * Simple wrapper for dynamic SVG import hook. You can implement your own wrapper,
//  * or even use the hook directly in your components.
//  */
// // @ts-ignore
// const Icon: React.FC<IconProps> = ({
//                                        name,
//                                        onCompleted,
//                                        onError,
//                                        ...rest
//                                    }): React.ReactNode | null => {
//     const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
//         onCompleted,
//         onError
//     });
//     if (error) {
//         return error.message;
//     }
//     if (loading) {
//         return "Loading...";
//     }
//     if (SvgIcon) {
//         return <SvgIcon {...rest} />;
//     }
//     return null;
// };
//
// export default Icon;