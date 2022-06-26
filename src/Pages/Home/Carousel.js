import React from 'react';
import image1 from '../../bannerImage/banner1.webp'
import image2 from '../../bannerImage/banner2.webp'

const Carousel = () => {
    return (
        <div class="carousel w-full">


            <div id="slide1" class="carousel-item relative w-full">
                <img className='w-full' alt='banner motorcycle' src={image1} />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" class="carousel-item relative w-full">
                <img className='w-full' alt='banner motorcycle' src={image2} />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>



        </div>
    );
};

export default Carousel;