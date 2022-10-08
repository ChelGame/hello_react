// import React from "react";
//
// const withIdKey = withKey('id');
//
// function Feed(props: {block: IBlockProps[]}) {
//     return (
//         <div>
//             {props.block.map(withIdKey(Block))}
//         </div>
//     )
// }
//
// interface IBlockProps {
//     title: string;
//     id: string;
// }
//
// function Block(props: IBlockProps) {
//     return (
//         <div>{props.title}</div>
//     )
// }
//
// function withKey(key ?: string) {
//     return <E, T extends React.ComponentType<E>>(component: T) =>
//         (props: E, index: number) =>
//             React.createElement(
//                 component,
//                 { ... props, key: key ? props[key as keyof E] : index},
//                 [],
//             );
// }

// Не рабочая функция.