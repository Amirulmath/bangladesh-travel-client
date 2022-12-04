import React from 'react';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const ReviewRow = ({review}) => {
    const {_id, serviceName, customer, message, photoURL} = review;
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to cancel this review')
        if(proceed){
            fetch(`https://bangladesh-travel-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
        }
    };

    const navigate = useNavigate();
    const handleEdit = (id) => {
        navigate(`/reviewedit/${id}`)
      }

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
                    <Button onClick={() => handleEdit(_id)} variant="primary">Edit</Button>{' '}
                    </>
                </div>
            </td>
        </tr>
    );
};

export default ReviewRow;