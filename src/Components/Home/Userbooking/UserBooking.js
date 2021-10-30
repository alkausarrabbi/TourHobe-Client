import React from 'react';
import { Link } from 'react-router-dom';

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
                        alert('deleted successfully');
                        window.location.reload(false)
                    }
                });
        }
    }
    const handleConfirm=id=>{
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
        <div className=" border-2 border mb-5 p-5 gx-4">
            <p> ID : {ProductId}</p>
            <p> Name : {Productname}</p>
            <p> Price : {Productprice}</p>
            <p> Order : {order}</p>
            
            <button onClick={()=>handleConfirm(_id)}>Confirm</button> 
            <button onClick={() => handleBooking(_id)}>Cancel</button>
            
        </div>
    );
};

export default UserBooking;