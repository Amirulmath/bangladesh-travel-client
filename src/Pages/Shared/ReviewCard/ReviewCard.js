import React from 'react';
import Card from 'react-bootstrap/Card';

const ReviewCard = ({review}) => {
    const {serviceName, customer, message} = review;
    return (
        <div>
            <div className='mt-4'>
                    <Card>
                        <Card.Body>
                            <h4>{serviceName}</h4>
                            <p><b>Name: {customer}</b></p>
                            <p>Review: {message}</p>
                        </Card.Body>
                    </Card>
                </div>
        </div>
    );
};

export default ReviewCard;