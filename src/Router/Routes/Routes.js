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
import MyAppoinment from '../../pages/Dashboard/MyAppoinment/MyAppoinment';
import AllUsers from '../../pages/Dashboard/AllUsers/AllUsers';
import AdminRoute from '../AdminRoute/AdminRoute';
import AddDoctors from '../../pages/Dashboard/AddDoctors/AddDoctors';
import ManageDoctors from '../../pages/Dashboard/ManageDoctors/ManageDoctors';
import Payment from '../../pages/Dashboard/Payment/Payment';
import DisplayError from '../../shared/DisplayError/DisplayError';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
        errorElement: <DisplayError></DisplayError>,
        children: ([
            {
                path: '/dashboard',
                element: <MyAppoinment></MyAppoinment>,
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctors',
                element: <AdminRoute><AddDoctors></AddDoctors></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }

        ])
    }
]);
export default router;