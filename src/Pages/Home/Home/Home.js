import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useTitle from '../../../Hooks/UseTitle';
import Emergency from '../Emergency/Emergency';
import Slider from '../Slider/Slider';
import Extra from './Extra';
import ServiceCard from './ServiceCard';

const Home = () => {
    const services = useLoaderData();

    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <div className='divider mt-20 w-3/4 mx-auto'></div>
            <Extra></Extra>
            <div className=''>
                <h1 className='text-5xl text-center mt-12 font-bold text-green-500'>Our Top Services</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mx-5'>
                    {
                        services.map(s => <ServiceCard key={s._id} service={s}></ServiceCard>)
                    }

                </div>

                <div className='text-center my-4'>
                    <Link to='/services' className='btn btn-outline'>SEE ALL</Link>
                </div>
            </div>
            <div className='divider mt-20 w-3/4 mx-auto'></div>
            <Emergency></Emergency>
        </div>
    );
};

export default Home;