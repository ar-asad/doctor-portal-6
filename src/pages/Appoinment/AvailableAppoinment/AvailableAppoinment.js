import React from 'react';
import { format } from 'date-fns';
import { useState } from 'react';
import { useEffect } from 'react';
import BookingModals from '../BookingModals/BookingModals';
import AvailableServices from '../AvailableServices/AvailableServices';

const AvailableAppoinment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center my-12'>
                <h2 className='text-xl text-secondary  '>Available Services on {format(date, 'PP')}</h2>
                <h3>Please select a service</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                {
                    services.map(service => <AvailableServices
                        service={service}
                        key={service._id}
                        setTreatment={setTreatment}
                    ></AvailableServices>)
                }
            </div>
            {
                treatment && <BookingModals treatment={treatment}></BookingModals>
            }
        </div>
    );
};

export default AvailableAppoinment;