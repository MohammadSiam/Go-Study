import React from 'react';
import './Mentors.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Mentor from './Mentor/Mentor';
import { Container } from 'react-bootstrap';
import { createContext } from 'react';

export const defaultContext = createContext('default')

const Mentors = () => {
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        fetch('mentors.JSON')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])
    

    return (
        <defaultContext.Provider value={<h2>Mentors Are Here</h2>}>
            <Container>
                <div className="persons">
                    {
                        persons.map(person => <Mentor
                            key={person.key}
                            person={person}
                        ></Mentor>)
                    }
                </div>
            </Container>
        </defaultContext.Provider>
    );
};

export default Mentors;