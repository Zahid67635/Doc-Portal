import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/UseTitle';
import ServiceDetail from './ServiceDetail';

const Services = () => {
    const services = useLoaderData()
    useTitle('Services')
    return (
        <div className='grid grid-cols-1 gap-10 w-3/4 mx-auto'>
            {
                services.map(s => <ServiceDetail key={s._id} service={s}></ServiceDetail>)
            }

        </div>
    );
};

export default Services;