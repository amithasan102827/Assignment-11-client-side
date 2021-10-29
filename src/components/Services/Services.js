import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://floating-sea-13118.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container mt-5">
            <h2>OUR PACKAGES</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}

                    ></SingleService>)
                }
            </Row>
        </div>
    );
};

export default Services;