import React, { Component } from 'react';

const randomStyle = {
    border: 'solid',
    borderWidth: '2px',
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left',
    justifyContent: 'center',
    margin: '10px',
};

class Random extends Component {
    render() {
        const { min , max } = this.props;
        // js code here
        const random = Math.floor(Math.random() * (max-min+1) + min) // why??? add the 1 to include the maximum... weird
        return (
            <div style={randomStyle}>
                <h3>Random value between {min} and {max} ={'>'} {random} </h3>
            </div>
        )
    }
}

// const random (above the return)
// <h3>Random value between {min} and {max} => {random} </h3> 
// <h3>Random value between {min} and {max} => {random} </h3> 
// add code logic - ternary operators - if its german do this if english do this...


export default Random;

// - `min`: A number
// - `max`: A number
// **Example**
// ```js
// <Random min={1} max={6}/>
// <Random min={1} max={100}/>