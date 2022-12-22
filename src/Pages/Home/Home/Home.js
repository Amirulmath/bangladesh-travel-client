import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Button from 'react-bootstrap/Button';
import './Home.css';
import PlaceList from './PlaceList/PlaceList';
import Transport from '../Transport/Transport';
import Hotel from './Hotel/Hotel';

const Home = () => {
    return (
        <div className='mt-5'>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <PlaceList></PlaceList>
            </div>
            <div className='mt-5 text-center'>
                <Link to='/services'>
                    <Button variant="success">See All</Button>
                </Link>
            </div>
            <div className='mt-5'>
                <Transport></Transport>
            </div>
            <div className='mt-5 mb-5'>
                <Hotel></Hotel>
            </div>
        </div>
    );
};

export default Home;