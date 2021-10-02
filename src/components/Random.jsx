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
        return (
            <div style={randomStyle}>
                <h3>Random value between {min} and 6 => {min} </h3> 
                <h3>Random value between {min} and {max} => {max} </h3> 
            </div>
        )
    }
}

export default Random;

// - `min`: A number
// - `max`: A number
// **Example**
// ```js
// <Random min={1} max={6}/>
// <Random min={1} max={100}/>