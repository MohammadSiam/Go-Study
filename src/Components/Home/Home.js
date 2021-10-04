import React from 'react';
import './Home.css'
import picture from '../../Image/b3.jpg'
import { Button, Container } from 'react-bootstrap'




const Home = () => {
    return (
        <Container>
            <div className="container home">
                <div className="info">
                    <h2>Welcome to Go Study It Training Institute.</h2>

                    <p>Go Study Also focus on Providing the necessary support to your IT carrer.So Shape your carrer with Go Study.</p>
                    <br />
                    <p>Go study is one of the latest IT technology based Institutions Bangladesh where academic excellence is a tradition,teaching passion and building carrer a habit. Go Study currently has more than 1000+ all kinds of undergraduate students and over 10 Experience faculties. The student population is projected to grow at 100% annually.</p>
                    <Button variant="primary">Read More</Button>{' '}
                </div>
                <div className="image-regular">
                    <img src={picture} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Home;