import React from 'react';
import Carousel from './Carousel';
import HomeProducts from './HomeProducts';
import ViewReview from './ViewReview';


const Home = () => {
    return (
        <div>

            <Carousel></Carousel>
            <HomeProducts></HomeProducts>
            <ViewReview></ViewReview>
        </div>
    );
};

export default Home;