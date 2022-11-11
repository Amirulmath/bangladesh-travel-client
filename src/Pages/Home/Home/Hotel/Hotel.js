import React from 'react';
import './Hotel.css';
import Carousel from 'react-bootstrap/Carousel';
import Hotel1 from '../../../../assets/images/hotel/hotel1.png'
import Hotel2 from '../../../../assets/images/hotel/hotel2.png'
import Hotel3 from '../../../../assets/images/hotel/hotel3.png'

const Hotel = () => {
    return (
        <div className='hotel-info bg-secondary'>
            <div className='text_hotel'>
                <h2 className='text-warning'>Residential Facilities</h2>
                <p className='text-white'>We will take our own bus to the designated location safely. Entertainment, rest and food are available on the way.</p>
            </div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Hotel1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Hotel2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Hotel3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Hotel;