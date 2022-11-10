import React from 'react';
import useTitle from '../../../Hooks/UseTitle';

const Review = ({ post }) => {
    const { comment, name, image } = post;
    useTitle('Review')
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="avatar mb-1 mx-auto">
                        <div className="w-24 rounded-full">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <h2 className="card-title mb-4 mx-3">{name}</h2>
                    <small>{comment}</small>
                </div>
            </div>
        </div>
    );
};

export default Review;