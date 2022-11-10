import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review }) => {
    const { _id, myname, image, comment, email, name } = review;

    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews/?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setOrderService(data)
                console.log(data);
            })
    }, [email])
    return (
        <tr>
            {/* <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th> */}
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
            <th>
                {/* <button
                    onClick={() => handleStatusUpdate(_id)}
                    className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button> */}
            </th>
        </tr>
    );
};

export default ReviewRow;