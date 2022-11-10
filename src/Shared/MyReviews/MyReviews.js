import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews/?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data)
                console.log(data);
            })
    }, [user?.email])
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

                            </tr>
                        </thead>
                        <tbody>
                            {
                                myReviews.map(r => <ReviewRow
                                    key={r._id}
                                    review={r}

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