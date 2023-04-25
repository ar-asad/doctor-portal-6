import React from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment';
import { useState } from 'react';

const Appoinment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvailableAppoinment date={date}></AvailableAppoinment>
        </div>
    );
};

export default Appoinment;