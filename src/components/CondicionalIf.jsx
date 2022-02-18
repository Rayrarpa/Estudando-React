import React from "react";
import { If } from "./If";

export function CondicionalIf(props) {
    return (
        <div>
            <h2>O número é {props.num}</h2>
            <If test={props.num % 2 == 0}>
                <span>Par</span>
            </If>
            <If test={props.num % 2 == 1}>
                <span>Impar</span>
            </If>
        </div>
    )
}