import React from "react";
import "./App.css";
import { Card } from "./components/layout/Card";
import { First } from "./components/First";
import { Parametro } from "./components/Parametro";
import { Filhos } from "./components/Filhos";
import { Repeticao } from "./components/Repeticao";
import { Condicional } from "./components/Condicional";
import { CondicionalIf } from "./components/CondicionalIf";

export function App() {
    return (
        <div className="App">
            <Card titulo="#01 - Primeiro Componente">
                <First />
            </Card>

            <Card titulo="#02 - Componente Com Parametro">
                <Parametro titulo="Esse é meu titulo" subtitulo="Esse é meu subtitulo" />
            </Card>

            <Card titulo="#03 - Componente com Filhos">    
                <Filhos>
                    <ul>
                        <li>Primeiro</li>
                        <li>Segundo</li>
                        <li>Terceiro</li>
                        <li>Quarto</li>
                    </ul>
                </Filhos>
            </Card>

            <Card titulo="#04 - Componente com Repetição">    
                <Repeticao></Repeticao>
            </Card>

            <Card titulo="#05 - Component com Condição v1 (ternario)">
                <Condicional num={10} />
            </Card>

            <Card titulo="#06 - Componente com Condição v2 (if)">
                <CondicionalIf num={19} />
            </Card>

    </div>
    )
}