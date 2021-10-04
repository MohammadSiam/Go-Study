import React from 'react';
import './Mentor.css'
import { Card, Container } from 'react-bootstrap';
import { useContext } from 'react';
import { defaultContext } from '../Mentors';

const Mentor = (props) => {
    const { name, company, Image, experience, position, description } = props.person;
    const abc = useContext(defaultContext);
    return (
        <div>
            <div>
                <Container>
                    <div className="person">
                        <Card className="cards">
                            <Card.Img variant="top" src={Image} className="image" />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{position}</Card.Subtitle>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Mentor;