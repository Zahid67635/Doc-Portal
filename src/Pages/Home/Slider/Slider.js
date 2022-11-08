import React from 'react';
import img1 from '../../../assets/image1.jpg';
import img2 from '../../../assets/image2.jpg';
import img3 from '../../../assets/image3.jpg';
import img4 from '../../../assets/image4.jpg';
import img5 from '../../../assets/image5.jpg';
import './Slider.css';
const Slider = () => {
    return (
        <div className='mt-8'>
            <div className="carousel w-3/4 mx-auto">
                <div id="slide1" className="carousel-item relative h-1/2 w-full">
                    <div className='slider-img'>
                        <img src={img1} alt='' className="w-full object-cover baler-img" />
                    </div>
                    <div className="absolute transform -translate-y-1/2 left-20 right-5 top-1/2 text-white">
                        <h1 className='text-5xl mb-4'>
                            Doctor Port <br />
                            24/7 <br />
                            Explore Our Services
                        </h1>
                        <p className='text-xl'>This is my personal services. I am a public doctor. I serve the poor people for free of cost.</p>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle btn-primary">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-primary">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-1/2">
                    <div className='slider-img'>
                        <img src={img2} alt='' className="w-full object-cover baler-img " />
                    </div>
                    <div className="absolute transform -translate-y-1/2 left-20 right-5 top-1/2 text-white">
                        <h1 className='text-5xl mb-4 '>
                            Doctor Port <br />
                            24/7 <br />
                            Explore Our Services
                        </h1>
                        <p className='text-xl'>This is my personal services. I am a public doctor. I serve the poor people for free of cost.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle btn-primary">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-primary">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-1/2">

                    <div className='slider-img'>
                        <img src={img3} alt='' className="w-full slider-img baler-img " />
                    </div>
                    <div className="absolute transform -translate-y-1/2 left-20 right-5 top-1/2 text-white">
                        <h1 className='text-5xl mb-4 '>
                            Doctor Port <br />
                            24/7 <br />
                            Explore Our Services
                        </h1>
                        <p className='text-xl'>This is my personal services. I am a public doctor. I serve the poor people for free of cost.</p>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle btn-primary">❮</a>
                        <a href="#slide4" className="btn btn-circle btn-primary">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-1/2">

                    <div className='slider-img'>
                        <img src={img4} alt='' className="w-full slider-img baler-img " />
                    </div>
                    <div className="absolute transform -translate-y-1/2 left-20 right-5 top-1/2 text-white">
                        <h1 className='text-5xl mb-4 '>
                            Doctor Port <br />
                            24/7 <br />
                            Explore Our Services
                        </h1>
                        <p className='text-xl'>This is my personal services. I am a public doctor. I serve the poor people for free of cost.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle btn-primary">❮</a>
                        <a href="#slide5" className="btn btn-circle btn-primary">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full h-1/2">

                    <div className='slider-img'>
                        <img src={img5} alt='' className="w-full baler-img " />
                    </div>
                    <div className="absolute transform -translate-y-1/2 left-20 right-5 top-1/2 text-white">
                        <h1 className='text-5xl mb-4'>
                            Doctor Port <br />
                            24/7 <br />
                            Explore Our Services
                        </h1>
                        <p className='text-xl'>This is my personal services. I am a public doctor. I serve the poor people for free of cost.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle btn-primary">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-primary">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;