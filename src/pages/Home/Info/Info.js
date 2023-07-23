import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 pt-0' >
            <InfoCard bgColor="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" img={clock}></InfoCard>
            <InfoCard bgColor="bg-neutral" cardTitle="Visit our location" img={marker}></InfoCard>
            <InfoCard bgColor="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact us" img={phone}></InfoCard>
        </div >
    );
};

export default Info;