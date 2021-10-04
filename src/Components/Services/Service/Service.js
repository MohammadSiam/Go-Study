import React from 'react';
import './Service.css'
import { Card, Container } from 'react-bootstrap';


const Service = (props) => {
    
    const {name,Image,description,courseFee}=props.service;
    return (
        <Container>
            <div className="service">
                <Card className="cards">
                    <Card.Img variant="top" src={Image} className="" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">Course Fee: {courseFee}</Card.Subtitle>
                    </Card.Body>
                    <button>View Course Details</button>
                </Card>
            </div>
        </Container>
    );
};

export default Service;