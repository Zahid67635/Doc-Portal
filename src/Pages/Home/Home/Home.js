import React from 'react';
import useTitle from '../../../Hooks/UseTitle';
import Emergency from '../Emergency/Emergency';
import Slider from '../Slider/Slider';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <Emergency></Emergency>
        </div>
    );
};

export default Home;