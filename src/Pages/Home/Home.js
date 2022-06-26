import React from 'react';
import Loading from '../Shared/Loading';
import Carousel from './Carousel';
import HomeProducts from './HomeProducts';


const Home = () => {
    return (
        <div>

            <Carousel></Carousel>
            <HomeProducts></HomeProducts>
            <Loading></Loading>
        </div>
    );
};

export default Home;