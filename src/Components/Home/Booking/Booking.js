import React from 'react';
import Button from 'react-bootstrap/Button';


const Booking = (props) => {
  
    const {Username,UserEmail,Productname,ProductId,phone,order,_id}=props.booking;

    const handleBookingcancle= id=>{
      const proceed = window.confirm('Are you sure, you want to delete?');
      if (proceed) {
          const url = `https://arcane-falls-38075.herokuapp.com/booking/${id}`;
          fetch(url, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(data => {  
                  if (data.deletedCount > 0) {
                      alert('successfully deleted');
                      window.location.reload(false)
                  }
              });
      }
  }
  const handleConfirmbooking=id=>{
    const update={order:"Confirmed"};
    const url = `https://arcane-falls-38075.herokuapp.com/booking/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(update)
    })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                alert('Update Successful');
                window.location.reload(false)
            }
        })
}

    return (
    
    <tr scope="row">
      
      <td>{ProductId}</td>
      <td>{Productname}</td>
      <td>{Username}</td>
      <td>{UserEmail}</td>
      <td>{phone}</td>
      <td>{order}</td>
      <td><Button variant="outline-success" onClick={()=>handleConfirmbooking(_id)}>Confirm</Button></td>
      <td> <Button  variant="outline-danger" onClick={() => handleBookingcancle(_id)}>Cancel</Button></td>
    </tr>
    
    );
};

export default Booking;