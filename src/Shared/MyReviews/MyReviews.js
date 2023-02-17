import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/UseTitle';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
    const { user, logout } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    useTitle('My Reviews')
    useEffect(() => {
        fetch(`https://doc-port-server.vercel.app/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `binudun ${localStorage.getItem('docPort-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logout()
                }
                return res.json()
            })
            .then(data => {
                setMyReviews(data)
                console.log(myReviews);
            })
    }, [user?.email])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this review');
        if (proceed) {
            fetch(`https://doc-port-server.vercel.app/review/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myReviews.filter(odr => odr._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }
    return (
        <div className='mb-32 ml-4'>

            {
                myReviews.length < 1 ? < h2 className="text-5xl text-center p-4">No reviews were added</h2> : <><h2 className="text-5xl text-center p-4">You have {myReviews.length} services.</h2> <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>

                                <th>User detail</th>
                                <th>Comment</th>
                                <th>Service Name</th>
                                <th>Delete/Update</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                myReviews.map(r => <ReviewRow
                                    key={r._id}
                                    review={r}
                                    handleDelete={handleDelete}

                                ></ReviewRow>)
                            }
                        </tbody>
                    </table>
                </div></>
            }


        </div >
    );
};

export default MyReviews;   