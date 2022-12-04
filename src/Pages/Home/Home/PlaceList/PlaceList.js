import React, { useEffect, useState } from 'react';
import PlaceListCard from '../../../Shared/PlaceListCard/PlaceListCard';
import './PlaceList.css';

const PlaceList = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('https://bangladesh-travel-server.vercel.app/places3')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='m-4'>
            <div className='m-4 text-center text-danger'>
                <h2>List of different Tourist Places</h2>
            </div>
            <div className='home-card m-4'>
                {
                    services.map(service =><PlaceListCard
                        key={service._id}
                        service={service}
                    ></PlaceListCard>)
                }
            </div>
        </div>
    );
};

export default PlaceList;