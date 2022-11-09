import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, name, image, detail, serviceCost } = service;
    return (
        <div>
            < div className="card-normal w-3/4 bg-base-100 shadow-xl mx-auto rounded-lg" >
                <img className='h-44 w-full rounded-lg' src={image} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{detail.slice(0, 100)}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default ServiceCard;