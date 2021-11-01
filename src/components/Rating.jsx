import React from 'react'

function Rating({children}) {
    const roundedUp = Math.round(children) // why??? add the 1 to include the maximum... weird
    const emptyStar = '☆';
    const fullStar = '★';
    return (
        <div>
        <h4>{fullStar.repeat(roundedUp) + emptyStar.repeat(5-roundedUp)}</h4>
        </div>
    )
}

export default Rating
