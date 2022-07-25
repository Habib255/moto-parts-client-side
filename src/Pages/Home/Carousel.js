import React from 'react';
import image1 from '../../bannerImage/banner1.webp'
import image2 from '../../bannerImage/banner2.webp'

const Carousel = () => {
    return (
        <div className="carousel w-full">


            <div id="slide1" className="carousel-item relative w-full">
                <img className='w-full' alt='banner motorcycle' src={image1} />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img className='w-full' alt='banner motorcycle' src={image2} />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>



        </div>
    );
};

export default Carousel;