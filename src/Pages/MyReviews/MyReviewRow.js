import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MyReviewRow = ({review}) => {
    const {_id, serviceName, customer, message, photoURL} = review;
    const navigate = useNavigate();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to cancel this review')
        if(proceed){
            fetch(`https://bangladesh-travel-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
        }
        navigate('/');
    };

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
            <td>
                <div>
                    <>
                    <Button onClick={() =>handleDelete(_id)} variant="primary">Delete</Button>{' '}
                    </>
                </div>
            </td>
        </tr>
    );
};

export default MyReviewRow;