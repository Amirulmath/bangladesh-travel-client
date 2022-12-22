import React from 'react';
import Image from 'react-bootstrap/Image'

const ReviewRow = ({review}) => {
    const {serviceName, customer, message, photoURL} = review;

    return (
        <tr>
            <td>{serviceName}</td>
            <td>
                <Image
                    style={{ height: '30px' }}
                    roundedCircle
                    src={photoURL}>
                </Image>
            </td>
            <td>{customer}</td>
            <td>{message}</td>
        </tr>
    );
};

export default ReviewRow;