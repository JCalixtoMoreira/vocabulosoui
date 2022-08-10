import React from 'react'

function Tentativa({ tentativa, palavra }) {
    const setColor = (char, index) => {
        let color = "black";
        if (palavra.includes(char)) color = "red";
        if (palavra[index] === char) color = "green";
        return color;
    }
    return (
        <li>
            {tentativa.split("").map((char, index) => {
                return (<span style={{ color: setColor(char, index), fontSize: "40px" }}>{char}</span>)
            })}
        </li>
    )
}

export default Tentativa