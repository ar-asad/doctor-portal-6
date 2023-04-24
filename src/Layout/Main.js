import React from 'react';
import Navber from '../shared/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/Footer/Footer';


const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;