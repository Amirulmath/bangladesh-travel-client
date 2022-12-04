import React, { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ReviewEdit = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState({});
    const { id, price, serviceName } = user;

    useEffect(() =>{
        fetch(`https://bangladesh-travel-server.vercel.app/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
            setReview(data.data);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
    }, [id]);

    const handlePlaceReview = event =>{
        event.preventDefault();
        const review = {
            customer: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value,
            photoURL: event.target.photoURL.value
        }
    }

//     fetch(`https://bangladesh-travel-server.vercel.app/reviews/${id}`, {
//       method: "PATCH",
//       headers: {
//         "content-type": "application/json"
//       },
//       body: JSON.stringify(reviews)
//     }).then(res => res.json())
//     .then(data => {
//       if(data.success){
//         toast.success(data.message);
//         navigate("/reviewedit")
//       } else {
//         toast.err(data.error)
//       }
//     })
//     .catch(err => toast.error(err.message))
//   }
    return (
        <div>
            <div className='m-4'>
                <Form onSubmit={handlePlaceReview}>
                    <div>
                        <h2>{serviceName}</h2>
                        <p><b>Every Person Cost::</b> {price}</p>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Your Name" defaultValue={review?.name}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control name="photoURL" type="text" placeholder="Phot URL" defaultValue={review?.photoURL} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" defaultValue={review?.email}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <div className='mt-4'>
                            <p>Type Your Review</p>
                            <>
                            <FloatingLabel controlId="floatingTextarea2">
                                <Form.Control   name="message"
                                as="textarea"
                                placeholder="Your review here" defaultValue={review?.message}
                                style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            </>
                        </div>
                    </Form.Group>

                    <Button className='m-4' variant="primary" type="submit">
                        Submit
                    </Button>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>
            </div>
            <div></div>
        </div>
    );
};

export default ReviewEdit;