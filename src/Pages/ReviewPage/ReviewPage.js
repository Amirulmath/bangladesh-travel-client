import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ReviewRow from './ReviewRow';

const ReviewPage = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () =>{
        fetch('https://bangladesh-travel-server.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <div>
                <h2>All Review</h2>
            </div>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Tourist Place</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review =><ReviewRow
                                key={review._id}
                                review= {review}
                            ></ReviewRow>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ReviewPage;