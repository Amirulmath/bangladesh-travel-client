import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const {title, image_url} = useLoaderData();
    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className="mb-2" variant="top" src={image_url} />
            </Card.Body>
            <Card.Footer className="text-muted">               
                <Link>
                    <Button variant="primary">Detail</Button>
                </Link>
            </Card.Footer>
        </Card>
    );
};

export default ServiceDetail;