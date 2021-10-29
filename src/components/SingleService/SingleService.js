import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleService = ({service}) => {
    const {_id,name,image,price,description}=service;
    return (
        <div>
    

    <Col>
      <Card className="">
        <Card.Img variant="top" className="" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
         <h4>${price}</h4>
          <Card.Text>
            {description}
          </Card.Text>
          <Link to={`/serviceDetails/${_id}`}> <button type="button" class="btn btn-warning">Book Now</button> </Link>
         
        </Card.Body>
      </Card>
    </Col>

  
        </div>
    );
};

export default SingleService;