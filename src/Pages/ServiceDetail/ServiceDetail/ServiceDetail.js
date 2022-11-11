import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const {_id, title, details, fee, date, image_url, place1, img1, place2, img2, place3, img3, place4, img4} = useLoaderData();
    return (
        <div>
            <div>
                <Card className="m-4">
                    <Card.Body>
                        <Card.Title className='text-center'>
                            <h1>{title}</h1>
                        </Card.Title>
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
                        <Link to='/services'>
                            <Button variant="primary">Back To Service</Button>
                        </Link>
                    </Card.Footer>
                </Card>
            </div>
            <div className='m-2 text-center text-danger'>
                <h2>Different Tourist Places There</h2>
            </div>
            <div className='place-card m-4'>
                <div>
                    <Card className='text-center'>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                        <Card.Text>
                            <h4>{place1}</h4>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className='text-center'>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                        <Card.Text>
                            <h4>{place2}</h4>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className='text-center'>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                        <Card.Text>
                            <h4>{place3}</h4>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className='text-center'>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                        <Card.Text>
                            <h4>{place4}</h4>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;