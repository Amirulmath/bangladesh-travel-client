import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    const services = useLoaderData();
    return (
        <div className='m-4'>
            <div>
                <Banner></Banner>
            </div>
            <div className='card-list'>
                {
                    services.map(service =><ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;