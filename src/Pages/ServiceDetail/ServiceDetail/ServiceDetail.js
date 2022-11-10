import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const {_id, title, details, fee, date, image_url} = useLoaderData();
    return (
        <Card className="m-4 text-center">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className="mb-2" variant="top" src={image_url} />
                <Card.Text>
                    <p><b>Course Detail: </b>{details}</p>
                    <p><b>Travel Date: </b>{date}</p>
                    <p><b>Every Person Cost: </b>Tk.{fee}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between text-muted">               
                <Link>
                    <Button variant="primary">Review</Button>
                </Link>
                <Link>
                    <Button variant="primary">Add service</Button>
                </Link>
                <Link to='/'>
                    <Button variant="primary">Back To Service</Button>
                </Link>
            </Card.Footer>
        </Card>
    );
};

export default ServiceDetail;