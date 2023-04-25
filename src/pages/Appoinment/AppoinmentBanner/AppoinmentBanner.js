import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bg.png'
import 'react-day-picker/dist/style.css';



const AppoinmentBanner = ({ date, setDate }) => {
    return (
        <div style={{
            background: `url(${bg})`,
            position: 'center'
        }} class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse gap-28">
                <img src={chair} alt='' class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;