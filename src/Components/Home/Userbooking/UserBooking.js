import React from 'react';
import "./UserBooking.css"
import Button from 'react-bootstrap/Button';

const UserBooking = (props) => {
    const {Productname,ProductId, Productprice,_id,order}=props.book;
    
    const handleBooking= id=>{
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
    
    return (
        <div className=" d-flex justify-content-center align-items-center flex-column border border-success mb-5 p-5 gx-4 userbooking rounded">
            <h6> ID : {ProductId}</h6>
            <h5> Name : {Productname}</h5>
            <h6> Price : {Productprice}</h6>
            <p className="text-danger"> Order : {order}</p>
            
            
            <br /> 
            <Button  variant="outline-danger" onClick={() => handleBooking(_id)}>Cancel</Button>
            
        </div>
    );
};

export default UserBooking;