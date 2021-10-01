import random from 'random';
import React from 'react';
import Tex from './Tex';
import { WorksheetHeader } from './Worksheets';

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

export function VerticalAdditionPage() {
    return (
        <>
            { WorksheetHeader() }
            <div style={{fontSize: "32px", display: "grid", gridTemplateColumns: "auto auto auto"}}>
                {
                    [...Array(12)].map((_, i) =>  <div style={{padding: "36px 24px", textAlign: "center"}}>
                        {VerticalAdditionProblem(random.int(1, 9), random.int(1, 9), false)}
                        </div> )
                }
            </div>
        </>
    )
}