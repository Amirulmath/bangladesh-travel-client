import React, { useEffect, useState } from 'react';
import PlaceListCard from '../../../Shared/PlaceListCard/PlaceListCard';
import './PlaceList.css';

const PlaceList = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('https://bangladesh-travel-server-amirulm08-gmailcom.vercel.app/places3')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='home-card'>
            {
                services.map(service =><PlaceListCard
                    key={service._id}
                    service={service}
                ></PlaceListCard>)
            }
        </div>
    );
};

export default PlaceList;