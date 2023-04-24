import React from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment';

const Appoinment = () => {
    return (
        <div>
            <AppoinmentBanner></AppoinmentBanner>
            <AvailableAppoinment></AvailableAppoinment>
        </div>
    );
};

export default Appoinment;