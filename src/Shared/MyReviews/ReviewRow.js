import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handleDelete }) => {
    const { _id, myname, image, comment, email, name } = review;

    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`https://doc-port-server.vercel.app/myreviews/?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setOrderService(data)
                console.log(data);
            })
    }, [email])
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-lg w-16 h-16">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="text-sm opacity-50">{_id}</div>
                        <div className="font-bold">{myname}</div>
                    </div>
                </div>
            </td>

            <td>{comment}</td>
            <td>{name}</td>
            <td>
                <button onClick={() => handleDelete(_id)} className='btn btn-danger'>X</button>
                <button
                    className="btn btn-ghost btn-xl ml-2">Edit</button>
            </td>
            <td>



            </td>
        </tr>
    );
};

export default ReviewRow;