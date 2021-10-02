import React, { Component } from 'react';

class Random extends Component {
    render() {
        const {min , max } = this.props;
        return (
            <div>
                <h3>Random value between 1 and 6 => {min} </h3> 
                <h3>Random value between 1 and 100 => {max} </h3> 
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