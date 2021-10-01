import random from "random";
import Tex from "../components/Tex";
import { WorksheetHeader } from "../components/Worksheets";

function AdditionBelow10Problem(i: number, a: number, b: number) {
    //let c = showAnswer ? String(a + b) : "\\quad"

    return (
        <>
        {i+1})&nbsp;&nbsp;&nbsp;<Tex tex={String.raw`${a} + ${b} = \underline{\quad\quad\quad}`} />
        </>
    );
}

export function AdditionBelow10Page() {
    return (
        <>
            { WorksheetHeader() }
            <div style={{fontSize: "32px", display: "grid", gridTemplateColumns: "auto auto"}}>
                {
                    [...Array(12)].map((_, i) =>  <div style={{padding: "36px 24px", textAlign: "center"}}>
                        {AdditionBelow10Problem(i, random.int(1, 9), random.int(1, 9))}
                        </div> )
                }
            </div>
        </>
    )
}