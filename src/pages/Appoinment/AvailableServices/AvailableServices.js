import React from 'react';

const AvailableServices = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card bg-base-100 shadow-xl text-center">
            <div className="card-body">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>{
                    slots.length
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another day</span>

                }</p>
                <p>
                    {
                        slots.length > 1
                            ? <span>{slots.length} spaces available</span>
                            : <span>{slots.length} space available</span>
                    }
                </p>
                <p>Price : {price}</p>
                <div className="card-actions justify-center">
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-secondary to-primary"
                    >Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableServices;