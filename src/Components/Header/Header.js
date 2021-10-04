import React from 'react';
import './Header.css'
import logo from '../../Image/cover.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Container fluid>
            <div className="header">
                <Navbar variant="light">
                    <Container>
                        <Navbar.Brand as={Link} to={"/home"}>
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>

                        </Navbar.Brand>
                        <Nav >
                            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/services"}>Services</Nav.Link>
                            <Nav.Link as={Link} to={"/mentors"}>Our Mentors</Nav.Link>
                            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;