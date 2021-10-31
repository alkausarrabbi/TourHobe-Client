import React, { useRef } from 'react';
import img from "../../../images/addpack.jpg"
const AddPackages = () => {
    const nameRef=useRef();
    const desRef=useRef()
    const urlRef=useRef()
    const priceRef=useRef()

    const handleAddPack=e=>{
        const name=nameRef.current.value;
        const description=desRef.current.value;
        const img=urlRef.current.value;
        const price=priceRef.current.value;

        const newPackage={name:name,description:description,img:img,price:price};
        fetch('https://arcane-falls-38075.herokuapp.com/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPackage)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the package.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }


    return (
        <div className="container mt-5 mb-5">
            <div className="row">
            <div className="col-lg-6 col-sm-12">
              <img src={img} alt="" className="img-fluid" />
           </div>
           <div className="col-lg-6 col-sm-12 mt-2">
               <h1 className="text-info">Add Package</h1>
               <div>
               <form onSubmit={handleAddPack} action="" className="d-flex flex-column justify-content-center mt-2 p-2">
                   <input type="text" ref={nameRef} placeholder="Place name" required />
                   <br />
                   <input type="text" ref={desRef}  placeholder="Description" required />
                   <br />
                   <input type="text" ref={urlRef}  placeholder="Input Place URL" required />
                   <br />
                   <input type="number" ref={priceRef}  placeholder="Price" required  />
                   <br />
                  <input type="submit"  value="submit" />
               </form>
               </div>
           </div>
            </div>
        </div>
    );
};

export default AddPackages;