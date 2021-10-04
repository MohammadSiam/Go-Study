import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <h3>GET START</h3>
            <h4><b>Apply Course On Go Study</b></h4>
            <Button variant="outline-info" className="btn-regular">Apply</Button>{' '}
        </div>
    );
};

export default Footer;