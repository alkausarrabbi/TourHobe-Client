import React from 'react';

const Booking = (props) => {
    const {Username,UserEmail,Productname,ProductId,phone,order}=props.booking;
    return (
    
    <tr>
      
      <td>{ProductId}</td>
      <td>{Productname}</td>
      <td>{Username}</td>
      <td>{UserEmail}</td>
      <td>{phone}</td>
      <td>{order}</td>
    </tr>
    
    );
};

export default Booking;