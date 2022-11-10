import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/places')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='card-list'>
            {
                services.map(service =><ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
        </div>
    );
};

export default Services;