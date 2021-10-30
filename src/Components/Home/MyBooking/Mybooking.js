import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import UserBooking from '../Userbooking/UserBooking';

const Mybooking = () => {
    const { user } = useAuth();
    const [myBookings,setMyBookings]=useState([]);
    useEffect(()=>{
        fetch("https://arcane-falls-38075.herokuapp.com/booking")
       .then(res=>res.json())
       .then(data=>setMyBookings(data))
    },[user])
    const mybookings= myBookings.filter(myBooking=>myBooking.UserEmail===user.email);
    console.log("mybookings",myBookings);
    console.log("After ",mybookings);

    return (
        <div className="container-fluid mb-5 mt-5 w-50 rounded">
            <h1>My Order</h1>
            <p className="text-danger">you must confirm your order from here</p>
            <div className="p-5">
              {
                  mybookings.map(mybooking=><UserBooking key={mybooking._id} book={mybooking} ></UserBooking>)
              }
            </div>
            
        </div>
    );
};

export default Mybooking;