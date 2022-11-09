import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetail = ({ service }) => {
    const { _id, image, serviceCost, name, detail } = service;
    const { } = useLoaderData();
    return (
        <div className='my-8'>
            <div className="card card-side bg-base-100 shadow-xl">
                <div className='w-full rounded-lg p-3'>
                    <img className='object-contain rounded-lg' src={image} alt="Movie" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{detail.split(0, 100)}</p>
                    <div className="card-actions justify-between">
                        <small><b>Service Charge: </b><span className='text-xl'>{serviceCost}</span> </small>
                        <Link to={`/services/${_id}`}> <button className="btn btn-primary">Show detail</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;