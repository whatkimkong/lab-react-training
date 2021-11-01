import React from 'react'

function CreditCard({type, number, expirationMonth,expirationYear, bank, owner, bgColor, color }) {
    const creditCardStyle = {
        border: 'none',
        width: '25%',
        margin: '10px',
        padding: '0px 20px 0px 20px',
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        borderRadius: '10px',
    };
    const typeStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
    };

    const pStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
    };

    return (
        <div style={creditCardStyle}>
            <div>
            <h4 style={typeStyle}>{type}</h4>
            <h2>**** **** **** {number.slice(-4)}</h2>
            <p style={pStyle}>Expires: {expirationMonth}/{expirationYear}  {bank}</p>
            <p style={pStyle}> {owner}</p>
            </div>
        </div>
    )
}

export default CreditCard;

// I MADE THEM WRAP WOOOOOOOOOOHOOOOOOOOO

// type: A string that can be "Visa" or "Master Card"
// number: A string that is a number of the credit card. You will only display the 4 last digits for security reasons 😉
// expirationMonth: A number that represents the month, between 1 and 12
// expirationYear: A number that represents the year
// bank: A string that represents the name of the bank
// owner: A string that represents the name of the owner
// bgColor: A string for the background color of the card
// color: A string for the text color of the card