import React from 'react';

function BoxColor({r, g, b}) {
    const randomColourR = Math.floor(Math.random() * 256)
    const randomColourG = Math.floor(Math.random() * 256)
    const randomColourB = Math.floor(Math.random() * 256)
    const boxStyle = {
        border: 'solid',
        borderWidth: '2px',
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        margin: '10px',
        padding: '20px',
        backgroundColor: `rgb(${randomColourR},${randomColourG},${randomColourB})`,
    };

    let rToHex = randomColourR.toString(16)
    const gToHex = randomColourG.toString(16)
    const bToHex = randomColourB.toString(16)

    return (
        <div style={boxStyle}>
            <p>{boxStyle.backgroundColor}</p>
            <p>#{rToHex.length == 1 ? "0" + rToHex : rToHex}{gToHex}{bToHex}</p>
        </div>
    );
}

// add code logic - ternary operators - if its german do this if english do this...

export default BoxColor;


// - `r`: A number between 0 and 255 representing the amount of red
// - `g`: A number between 0 and 255 representing the amount of green
// - `b`: A number between 0 and 255 representing the amount of blue

// **Example**

// ```js
// <BoxColor r={255} g={0} b={0} />
// <BoxColor r={128} g={255} b={0} />
// ```