import Lottie from 'lottie-react';
import React from 'react';
import err from '../../assets/84885-404-sleep-cat.json';
import useTitle from '../../Hooks/UseTitle';
const Notfound = () => {
    useTitle('Not FOund')
    return (
        <div className='w-3/4 mx-auto'>
            <Lottie animationData={err} loop={true}></Lottie>
            <h1 className='text-5xl text-center font-bold'>Page Not Found</h1>
        </div>
    );
};

export default Notfound;