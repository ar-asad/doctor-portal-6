import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import OurServices from '../OurServices/OurServices';
import Care from '../Care/Care';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

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
            <Footer></Footer>
        </div>
    );
};

export default Home;