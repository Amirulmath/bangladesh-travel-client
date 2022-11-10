import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    const services = useLoaderData();
    return (
        <div className='m-4'>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;