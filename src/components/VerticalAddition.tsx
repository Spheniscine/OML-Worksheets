import React from 'react';
import Tex from './Tex';

function VerticalAdditionProblem(a: number, b: number, showAnswer: boolean) {
    let c = showAnswer ? String(a + b) : "\\quad"

    return (
        <Tex tex={String.raw`
            \begin{align}
            ${a} & \\
            +\quad ${b} & \\
            \hline
            ${c} &
            \end{align}
            `} />
    );
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function VerticalAdditionPage() {
    return (
        <>
            <div style={{fontSize: "32px", display: "flex", flexFlow: "row wrap", padding: "12px"}}>
                <p style={{width: "50%", textAlign: "left", fontWeight: "bold"}}>
                Name: ____________
                </p>
                <p style={{width: "50%", textAlign: "right", fontWeight: "bold"}}>
                Date: ____________
                </p>
            </div>
            <div style={{fontSize: "32px", display: "grid", gridTemplateColumns: "auto auto auto"}}>
                {
                    [...Array(12)].map((_, i) =>  <div style={{padding: "36px 24px", textAlign: "center"}}>
                        {VerticalAdditionProblem(getRandomInt(1, 9), getRandomInt(1, 9), false)}
                        </div> )
                }
            </div>
        </>
    )
}