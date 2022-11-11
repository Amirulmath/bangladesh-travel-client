import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Bus1 from '../../../assets/images/transports/reb-bus.png';
import Bus2 from '../../../assets/images/transports/blue-bus.png';
import Bus3 from '../../../assets/images/transports/yellow-bus.png';
import './Transport.css';

const Transport = () => {
    return (
        <div className='transport-info bg-secondary'>
            <div className='text_info'>
                <h2 className='text-warning'>Transport System</h2>
                <p className='text-white'>We will take our own bus to the designated location safely. Entertainment, rest and food are available on the way.</p>
            </div>
            <div>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Bus1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Bus2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Bus3}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
            </div>
        </div>
    );
};

export default Transport;