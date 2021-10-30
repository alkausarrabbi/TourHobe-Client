import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Package = (props) => {
    const {_id,name,img,price}=props.pack;
    return (
        <div className="col-lg-4">
            <Card style={{ maxWidth: '18rem', height:"22rem" }}>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Price : {price}
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