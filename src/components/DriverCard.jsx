import React from 'react';

function DriverCard({ name, rating, img, car: { model, licensePlate } }) {
  const driverCardStyle = {
    border: 'none',
    margin: '10px',
    backgroundColor: '#424952',
    color: 'white',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0px 20px 0px',
  };
  const imgStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    borderRadius: '50%',
    width: '40%',
  };
  const textStyle = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    justifyContent: 'flex-start',
    marginLeft: '20px',
  };
  const childStyle = {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
  };

  const roundedUp = Math.round(rating); // why??? add the 1 to include the maximum... weird
  const emptyStar = '☆';
  const fullStar = '★';
  return (
    <div style={driverCardStyle}>
      <div style={childStyle}>
        <img style={imgStyle} src={img} alt="carOwnerImage" />
        <div style={textStyle}>
          <h2>{name}</h2>
          <h2>
            {fullStar.repeat(roundedUp) + emptyStar.repeat(5 - roundedUp)}
          </h2>
          <h5>
            {model} - {licensePlate}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
