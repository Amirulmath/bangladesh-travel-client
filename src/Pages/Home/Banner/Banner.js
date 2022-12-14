import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../../../assets/images/banner/banner1.png';
import Banner2 from '../../../assets/images/banner/banner2.png';
import Banner3 from '../../../assets/images/banner/banner3.png';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Banner1}
                alt="First slide"
                />
                {/* <Carousel.Caption>
                <h3 className='text-white'>Beauty of Bangladesh Sea Beach</h3>
                <p>Let's go around and take a bath in the water of the fountain in the lap of the mountain.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Banner2}
                alt="Second slide"
                />

                {/* <Carousel.Caption>
                <h3 className='text-white'>Waterfall Beauty of Bangladesh</h3>
                <p className='text-white'>Let's go around and take a bath in the water of the fountain in the lap of the mountain.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Banner3}
                alt="Third slide"
                />

                {/* <Carousel.Caption>
                <h3 className='text-white'>Tea garden and hill's Beauty of Bangladesh</h3>
                <p className='text-white'>
                Let's go around and take a bath in the water of the fountain in the lap of the mountain.
                </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;