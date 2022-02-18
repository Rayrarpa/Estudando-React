import React from "react";

export function Filhos(props) {
    return (
    <>
        <h2>Os elementos filhos: </h2>
        <div>
            {props.children}
        </div>
    </>
    )
}