import React from 'react';
import { format } from 'date-fns';
import { useState } from 'react';
import { useEffect } from 'react';
import BookingModals from '../BookingModals/BookingModals';
import AvailableServices from '../AvailableServices/AvailableServices';
import { useQuery } from '@tanstack/react-query';

const AvailableAppoinment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, 'PP');
    const { data: appoinmentOptions, isLoading, refetch } = useQuery({
        queryKey: ['appoinmentOptions', formatedDate],
        queryFn: () => fetch(`http://localhost:5000/appoinmentOptions?date=${formatedDate}`)
            .then(res => res.json())
    })

    // if we are use loading following this.......or above rules.....

    if (isLoading) {
        return <h1 className='text-4xl text-red-500 text-center'>Loading........</h1>
    }


    // useEffect(() => {
    //     fetch('http://localhost:5000/appoinmentOptions')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    return (
        <div>
            <div className='text-center my-12'>
                <h2 className='text-xl text-secondary  '>Available Services on {format(date, 'PP')}</h2>
                <h3>Please select a service</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                {
                    appoinmentOptions.map(service => <AvailableServices
                        service={service}
                        key={service._id}
                        setTreatment={setTreatment}
                    ></AvailableServices>)
                }
            </div>
            {
                treatment && <BookingModals date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch}></BookingModals>
            }
        </div>
    );
};

export default AvailableAppoinment;