import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Package from '../Package/Package';
import "./Packages.css"

const Packages = () => {
    const [packages,setPackages]=useState([]);
    useEffect(()=>{
        fetch('https://arcane-falls-38075.herokuapp.com/packages')
        .then(res=>res.json())
        .then(data=>setPackages(data))
    },[]);


    return (
        <div id="packages">

            <div className="text-info mb-5">
                <h1>Current Hot Packages</h1>
            </div>
            
                <div className="container mb-5 d-flex align-items-center justify-content-center ">
                <div className="row gy-4 mx-auto ps-3 ">
                {
                packages.map(pack =><Package Key={pack._id} pack={pack} ></Package>)
                } 
                    

                </div>
                </div>
               
          
        </div>
    );
};

export default Packages;