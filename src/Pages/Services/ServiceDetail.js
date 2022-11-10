import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoView } from 'react-photo-view';
const ServiceDetail = ({ service }) => {
    const { _id, image, serviceCost, name, detail } = service;

    return (
        <div className='my-8'>
            <div className="grid grid-cols-1 md:grid-cols-2 card card-side bg-base-100 shadow-xl">
                <div className='w-full rounded-lg p-3'>
                    <PhotoView src={image}>
                        <img className='object-contain rounded-lg' src={image} alt="pic" />
                    </PhotoView>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{detail.slice(0, 100)}</p>
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