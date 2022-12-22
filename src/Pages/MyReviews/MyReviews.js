import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Table from 'react-bootstrap/Table';
import MyReviewRow from './MyReviewRow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReview, setMyReview] = useState([]);

    useEffect( () =>{
        fetch(`https://bangladesh-travel-server.vercel.app/myreview?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyReview(data))
    }, [user?.email])

    return (
        <div>
            <div>
                <h2>My Review</h2>
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
                            myReview.map(review =><MyReviewRow
                                key={review._id}
                                review= {review}
                            ></MyReviewRow>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyReviews;