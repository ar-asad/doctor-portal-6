import React, { useContext } from 'react';
import { AuthContex } from '../../../context/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const MyAppoinment = () => {
    const { user } = useContext(AuthContex);

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings, isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <h2 className='text-4xl font-semibold'>Loading.....</h2>
    }
    return (
        <div>
            <h2 className='text-3xl font-semibold mb-5'>My Appoinment</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) =>
                                <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.patient}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.appoinmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td>${booking.price}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid && <Link
                                                to={`/dashboard/payment/${booking._id}`}
                                                className='btn btn-primary btn-sm'
                                            >


                                                Pay
                                            </Link>
                                        }
                                        {
                                            booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyAppoinment;