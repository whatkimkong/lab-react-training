import React, { Component } from 'react';

const idCardStyle = {
    border: 'solid',
    borderWidth: '1px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left',
    padding: '5px',
    margin: '10px',
}

const idTextStyle = {
    marginLeft: '30px',
}

class IdCard extends Component {
   render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    return (
     <div style={idCardStyle}>
        <div>
        <img alt="" src={picture} width='230px'/>
        </div>
        <div style={idTextStyle}>
        <h4>First name: {firstName}</h4>
        <h4>Last name: {lastName}</h4>
        <h4>Gender: {gender}</h4>
        <h4>Height {height}</h4>
        <h4>Birth: {birth.toDateString()}</h4>
        </div>
     </div>
     )}
 }

 export default IdCard;

// <IdCard
//   lastName='Doe'
//   firstName='John'
//   gender='male'
//   height={178}
//   birth={new Date("1992-07-14")}
//   picture="https://randomuser.me/api/portraits/men/44.jpg"
// />

// <IdCard
//   lastName='Delores '
//   firstName='Obrien'
//   gender='female'
//   height={172}
//   birth={new Date("1988-05-11")}
//   picture="https://randomuser.me/api/portraits/women/44.jpg"
// />