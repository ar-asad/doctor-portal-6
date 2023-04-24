import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import OurServices from '../OurService/OurService';
import Care from '../Care/Care';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <OurServices></OurServices>
            <Care></Care>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;