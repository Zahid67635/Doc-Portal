import React from 'react';

const Comment = () => {
    ///REview items page
    const handleReview = (e) => {
        e.preventDefault()


    }
    return (
        <div>
            <h1 className='text-4xl my-4'>Add your Review Here</h1>
            <form onSubmit={handleReview}>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Full Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" placeholder="Img URL" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">ADD</button>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default Comment;