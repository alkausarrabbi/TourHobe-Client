import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';

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
            <h6>Total Booking : {bookings.length}</h6>
            <br />
            
                <table class="table">
    <thead>
    <tr>
      <th scope="col">ProductID</th>
      <th scope="col">ProductName</th>
      <th scope="col">UserName</th>
      <th scope="col">UserEmail</th>
      <th scope="col">Phone</th>
      <th scope="col">Status</th>
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
            
    );
};

export default Bookings;