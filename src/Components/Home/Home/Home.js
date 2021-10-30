import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div id="home">
           <Banner></Banner>
           <Packages></Packages>
           <Review></Review>
        </div>
    );
};

export default Home;