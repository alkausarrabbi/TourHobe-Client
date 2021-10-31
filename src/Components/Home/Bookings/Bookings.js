import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import "./Bookings.css"

const Bookings = () => {
    const [bookings,setBookings]=useState([]);
    useEffect(()=>{
        fetch("https://arcane-falls-38075.herokuapp.com/booking")
       .then(res=>res.json())
       .then(data=>setBookings(data))
    },[])
    return (
        <div className="container mt-5">
            <h1>All Users Booking list:</h1>
            <h5 className="text-success">Total Booking : {bookings.length}</h5>
            <br />
            <div className="table-responsive mb-5">

            <table className="table table-striped ">
    <thead>
    <tr>
      <th scope="col-sm-2">ProductID</th>
      <th scope="col-sm-2">ProductName</th>
      <th scope="col-sm-2">UserName</th>
      <th scope="col-sm-2">UserEmail</th>
      <th scope="col-sm-2">Phone</th>
      <th scope="col-sm-2">Status</th>
    </tr>
  </thead>
  <tbody>
  {
                    bookings.map(booking=><Booking 
                        key={booking._id}
                        booking={booking}
                    
                    ></Booking>)
                }
    
  </tbody>
</table>
            </div>
                
                </div>
            
    );
};

export default Bookings;