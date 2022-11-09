import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/UseTitle';
import Emergency from '../Emergency/Emergency';
import Slider from '../Slider/Slider';
import ServiceCard from './ServiceCard';

const Home = () => {
    const services = useLoaderData();
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mx-5'>
                {
                    services.map(s => <ServiceCard key={s._id} service={s}></ServiceCard>)
                }

            </div>
            <div className='text-center my-4'>
                <Link to='/services' className='btn btn-outline'>SEE ALL</Link>
            </div>
            <Emergency></Emergency>
        </div>
    );
};

export default Home;