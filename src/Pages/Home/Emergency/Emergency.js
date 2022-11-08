import Lottie from 'lottie-react';
import emer from '../../../assets/114380-ambulancia.json';
import React from 'react';

const Emergency = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 my-10 bg-cyan-200'>
            <div className='w-3/4 mx-auto'>
                <h1 className='text-4xl pt-3'>Emergency : </h1>
                <Lottie animationData={emer} loop={true}></Lottie>
            </div>
            <div className='w-3/4 mx-auto my-4 p-12 border-4 border-indigo-500/50 shadow-blue-500/50 shadow-2xl bg-cyan-100 rounded-lg'>
                <h1 className='text-2xl	'>
                    IF THERE IS ANY <b>EMERGENCY</b>. DON'T FORGET TO CALL US. <br /> <br />
                    CONTACT: 01777111777 <br />
                    EMAIL: doc.port@gmail.com
                </h1>
            </div>
        </div>
    );
};

export default Emergency;