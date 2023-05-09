import React, { useContext } from 'react';
import Navber from '../../shared/Navber/Navber';
import { Link, Outlet } from 'react-router-dom';
import { AuthContex } from '../../context/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const DashboardLayout = () => {
    const { user } = useContext(AuthContex)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navber></Navber>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        <li><Link to='/dashboard'>My Appoinment</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/adddoctors'>Add a Doctor</Link></li>
                                <li><Link to='/dashboard/manageDoctors'>Mangage Doctor</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;