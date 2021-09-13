import React from 'react';
import Tex from './components/Math';
import logo from './logo.svg';
import './App.css';

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


function App() {
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
            {/* <table style={{fontSize: "32px"}}>
                <tr>
                    <th style={{padding: "8px"}}>Name: __________ </th>
                    <th/>
                    <th style={{padding: "8px"}}>Date: __________ </th>
                </tr>
                <tr>
                    <td style={{padding: "8px"}}>{ VerticalAdditionProblem(2, 3, false) }</td>
                    <td style={{padding: "8px"}}>{ VerticalAdditionProblem(2, 3, false) }</td>
                    <td style={{padding: "8px"}}>{ VerticalAdditionProblem(2, 3, false) }</td>
                </tr>
                <tr>
                    <td style={{padding: "8px"}}>{ VerticalAdditionProblem(2, 3, false) }</td>
                    <td style={{padding: "8px"}}>{ VerticalAdditionProblem(23, 34, false) }</td>
                    <td style={{padding: "8px"}}>{ VerticalAdditionProblem(23, 34, false) }</td>
                </tr>
                <tr>
                    <td style={{padding: "8px"}}>{ VerticalAdditionProblem(2, 3, false) }</td>
                    <td style={{padding: "8px"}}>{ VerticalAdditionProblem(23, 34, false) }</td>
                    <td style={{padding: "8px"}}>{ VerticalAdditionProblem(23, 34, false) }</td>
                </tr>
            </table> */}
        </>
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.tsx</code> and save to reload.
        //     </p>
        //     <p>
        //         {/* <Math tex={String.raw`
        //         \begin{align}
        //         124 & \\
        //         +\quad 53 & \\
        //         \hline
        //         177 &
        //         \end{align}
        //         `} /> */}

        //         {
        //             VerticalAdditionProblem(2, 3, false)
        //         }
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
    );
}

export default App;
