import React from 'react';
import Banner from '../Banner/Banner';
import Benefits from '../Benefits/Benefits';
import Header from '../Header/Header';
import Promotioning from '../Promotioning/Promotioning';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Promotioning></Promotioning>
            <Benefits></Benefits>
           
        </div>
    );
};

export default Home;