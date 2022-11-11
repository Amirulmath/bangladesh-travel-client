import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Button from 'react-bootstrap/Button';
import './Home.css';
import PlaceList from './PlaceList/PlaceList';
import Card from 'react-bootstrap/Card';
import Transport from '../Transport/Transport';

const Home = () => {
    const services = useLoaderData();
    return (
        <div className='m-4'>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <PlaceList></PlaceList>
            </div>
            <div className='m-4 text-center'>
                <Link to='/services'>
                    <Button variant="success">See All</Button>
                </Link>
            </div>
            <div>
                <Transport></Transport>
            </div>
        </div>
    );
};

export default Home;