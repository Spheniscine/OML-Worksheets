import React from 'react';

export function WorksheetHeader() {
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
        </>
    )
}