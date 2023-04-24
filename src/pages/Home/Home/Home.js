import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import OurServices from '../OurService/OurService';
import Care from '../Care/Care';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <OurServices></OurServices>
            <Care></Care>
            <MakeAppoinment></MakeAppoinment>
        </div>
    );
};

export default Home;