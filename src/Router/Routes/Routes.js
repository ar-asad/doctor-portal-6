import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../pages/Home/Home/Home';
import About from '../../pages/About/About';
import Appoinment from '../../pages/Appoinment/Appoinment/Appoinment';
import Register from '../../pages/Login/Register';
import Login from '../../pages/Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import Dashboard from '../../pages/Dashboard/Dashboard/Dashboard';
import MyAppoinment from '../../pages/Dashboard/MyAppoinment/MyAppoinment';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appointment',
                element: <Appoinment></Appoinment>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: ([
            {
                path: '/dashboard',
                element: <MyAppoinment></MyAppoinment>
            },


        ])
    }
]);
export default router;