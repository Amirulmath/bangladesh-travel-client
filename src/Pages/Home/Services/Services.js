import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('https://bangladesh-travel-server.vercel.app/places')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='mt-4 text-center text-success'>
                <h1>List of different Tourist Places</h1>
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

export default Services;