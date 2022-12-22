import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-20'>
            <div className='mt-5'>
                <h1 className='text-center text-info'>404</h1>
                <p className='text-center mt-5'> OOPS! PAGE NOT FOUND </p>
                <p className='text-center mt-5'>Sorry, the page you're looking for doesn't exist.</p>
            </div>
            <div className='text-center my-5'>
                <Link to='/' type="button" className='btn rounded-full' ><button type="button" class="btn btn-secondary">Return To Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;