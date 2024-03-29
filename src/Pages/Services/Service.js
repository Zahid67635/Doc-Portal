import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Review from './Review/Review';
import { FaCross } from "react-icons/fa";
import { AuthContext } from '../../Contexts/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../Hooks/UseTitle';


const Service = () => {
    const { _id, name, detail, image, serviceCost } = useLoaderData();
    const [review, setReview] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://doc-port-server.vercel.app/review/${_id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [_id])
    useTitle(`${name}`)
    const handlePost = (e) => {
        e.preventDefault()
        const form = e.target;
        const comment = form.comment.value;
        const email = user.email;
        const data = { comment, email, myname: user?.displayName, image: user.photoURL, name };
        console.log(data);

        fetch(`https://doc-port-server.vercel.app/review/${_id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                const updatedReview = [...review, data]
                setReview(updatedReview);
                console.log(result);
                if (result.acknowledged) {
                    toast.success('Successfully add comment')
                }
            })
            .catch(er => console.log(er))
        form.reset();
    }
    return (
        <div className='w-3/4 mx-auto'>
            <div className='w-3/4 mx-auto h-1/2 object-contain p-5 text-center'>
                <h1 className='text-5xl text-center mb-4 font-bold'>{name}</h1>
                <img className='w-full rounded-lg' src={image} alt="" />
            </div>
            <div className='my-10'>
                <h1 className='text-3xl mb-4 font-bold'>Descriptions: </h1>
                <p>{detail}</p>
                <h1 className='text-xl mt-4 text-end'>Cost: <b className='text-2xl'>{serviceCost}</b></h1>
                <div className='text-center'><Link className='btn btn-primary'>Confirm Order</Link></div>
            </div>

            <div className='my-16'>
                <h1 className='text-4xl font-bold text-indigo-700 text-center mb-8'>Our Customer Reviews</h1>
                <div className='my-6'>
                    {
                        user?.uid ?
                            <form className='w-1/2' onSubmit={handlePost}>
                                <label htmlFor="comment">Add Your Valuable Comment: </label><br />
                                <input className="textarea textarea-success" placeholder="Write Your Comment here" name="comment"></input>
                                <button type='submit' className='btn btn-outline btn-primary ml-2'>Post</button>
                            </form>
                            :
                            <div className='w-38'> <input className="textarea textarea-success" placeholder="Bio" disabled></input>
                                <button className='btn btn-outline btn-primary'>Post</button></div>
                    }
                    <Toaster></Toaster>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                        review.map(r => <Review key={r._id} post={r}></Review>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Service;