import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Details = () => {
    const nameRef=useRef();
    const emailRef=useRef();
    const  productNameRef=useRef();
    const  productIDRef=useRef();
    const  productPriceRef=useRef();
    const  addressRef=useRef();
    const  phoneRef=useRef();
    

    const { user} = useAuth();
    const{id}=useParams();
    const [detail,setDetail]=useState([]);
    const url=`https://arcane-falls-38075.herokuapp.com/packages/${id}`
    useEffect(()=>{
         fetch(url)
         .then(res=>res.json())
         .then(data=>setDetail(data))
    },[])

    const handleBooking=e=>{
        const Username=nameRef.current.value;
        const UserEmail=emailRef.current.value;
        const Productname=productNameRef.current.value;
        const ProductId=productIDRef.current.value;
        const Productprice=productPriceRef.current.value;
        const address=addressRef.current.value;
        const phone=phoneRef.current.value;
       const booking={Username,UserEmail,Productname,ProductId, Productprice,address,phone,order:"Pending"}
       
       fetch('https://arcane-falls-38075.herokuapp.com/booking', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Booking Successfully')
               
            }
        })
    e.preventDefault();
}
     
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
            <div className="col-lg-6 col-sm-12">
              <h6>Tour Package-Id:{id}</h6>
               <h1>{detail.name}</h1>
                <img src={detail.img} alt="" className="h-50 w-50" />
                <h5 className="mt-2 text-danger">Description</h5>
                <p>{detail.description}</p>
           </div>
           <div className="col-lg-6 col-sm-12">
               <h1 className="text-info">Book Now</h1>
               <div>
               <form onSubmit={handleBooking} action="" className="d-flex flex-column justify-content-center p-2">
                   <input  type="text" ref={nameRef}  value={user.displayName || " "} />
                   <br />
                   <input type="email" ref={emailRef}  value={user.email || " "}/>
                   <br />
                   <input type="text" ref={productNameRef}  value={detail.name || " "}/>
                   <br />
                   <input type="text" ref={productIDRef}  value={detail._id || " "} />
                   <br />
                   <input type="text" ref={ productPriceRef}  value={detail.price || " "}/>
                   <br />
                   <input type="text" ref={addressRef}  name="Address" id="" placeholder="Address" required />
                   <br />
                   <input type="number" ref={phoneRef}  name="number" id="" placeholder="Contact Number(+8801862555331)" required  />
                   <br />
                  <input type="submit"  value="submit" />
               </form>
               </div>
           </div>
            </div>
        </div>
    );
};

export default Details;