import React, { useEffect, useState } from 'react';
import "./Services.css"
import { Card } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="container persons">
            {
                services.map(service=> <Service 
                key={service.key}
                service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;