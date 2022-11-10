import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const PlaceListCard = ({service}) => {
    const { _id, title, details, fee, date, image_url } = service;

    return (
        <Card className=' text-center'>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className="mb-2" variant="top" src={image_url} />
                <Card.Text>
                    <p><b>Course Detail: </b>{details.length > 100 ? details.slice(0,100) + '...' : details}</p>
                    <p><b>Travel Date: </b>{date}</p>
                    <p><b>Every Person Cost: </b>Tk.{fee}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between text-muted">            
                <Link>
                    <Button variant="primary">Review</Button>
                </Link>
                <Link to={`/detail/${_id}`}>
                    <Button variant="primary">Detail</Button>
                </Link>
            </Card.Footer>
        </Card>
    );
};

export default PlaceListCard;