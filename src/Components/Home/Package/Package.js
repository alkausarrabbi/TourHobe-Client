import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Package = (props) => {
    const {_id,name,img,price,description}=props.pack;
    return (
        <div className="col-lg-4 ">
            <Card className="Packages" style={{ maxWidth: '22rem', height:"30rem" }}>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <b>Description</b> : {description.substring(0,100)}
          </Card.Text>
          <Card.Text className="text-primary">
           <b> Price : {price}</b>
          </Card.Text>
         <Link to={`/home/packages/${_id}`}>
         <Button variant="danger">Book Now</Button>
         </Link >
        </Card.Body>
      </Card>
        </div>
        
    );
};

export default Package;