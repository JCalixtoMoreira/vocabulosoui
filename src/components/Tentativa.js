import React from 'react'

function Tentativa({ tentativa, palavra }) {
    const setColor = (char, index) => {
        let color = "black";
        if (palavra.includes(char)) color = "yellow";
        if (palavra[index] === char) color = "green";
        return color;
    }
    return (
        <>
            {tentativa.split("").map((char, index) => {
                return (<span style={{ color: setColor(char, index) }}>{char}</span>)
            })}
        </>
    )
}

export default Tentativa