import React from 'react';
import { HashLink } from 'react-router-hash-link';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import icon from "../../images/icon.png"
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
       
        <div className="">
        <div className="pt-2 d-flex justify-content-between ps-2 pe-2 bg-info text-light  ">
            <p>We’re here to provide 24/7 at your service</p>
            <p><small>Phone : +0881862555331</small>::<small>Email : tourhobe@gmail.com</small></p>
        </div>
        <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">
                        <img
          alt=""
          src={icon}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
     Tour Hobe
      </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link as={HashLink} className="text-dark" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="text-dark" to="/home#packages">Packages</Nav.Link>
                        <Nav.Link as={HashLink} className="text-dark" to="/addpackages">AddPackages</Nav.Link>
                        <Nav.Link as={HashLink} className="text-dark" to="/home#review">Reviews</Nav.Link>
                        <Nav.Link as={HashLink} className="text-dark" to="/branch">Branches</Nav.Link>
                        <Nav.Link as={HashLink} className="text-dark" to="/mybooking">My Booking</Nav.Link>
                        <Nav.Link as={HashLink} className="text-dark" to="/bookings">All Bookings</Nav.Link>
                        <Nav.Link as={HashLink} className="text-dark" to="/aboutus">About Us</Nav.Link>
                        {user?.email? 
                            <Button onClick={logOut} className="btn btn-danger m-3" variant="light">Logout</Button> :
                            <Nav.Link as={Link} className="text-dark" to="/login">Login</Nav.Link>
                            // <Nav.Link as={Link} className="text-dark" to="/signup">SignUP</Nav.Link>
                            }
                        {user?.email? 
                            <></> :
                            <Nav.Link as={Link} className="text-dark" to="/signup">SignUp</Nav.Link>
                            }
                            
                        <Navbar.Text>
                             <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    
       
    );
};

export default Header;