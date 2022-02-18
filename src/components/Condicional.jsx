import React from "react";

export function Condicional(props) {
    return (
        <div>
            <h2>O seu número é {props.num}</h2>
            {props.num % 2 == 0 ? 
                <span>Par</span>
                : <span>Impar</span>
            }
        </div>
    )
}