import React from 'react';

const Review = ({ post }) => {
    const { _id, comment, name, image, email } = post;

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