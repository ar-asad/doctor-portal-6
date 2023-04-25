import { format } from 'date-fns';
import React from 'react';

const BookingModals = ({ treatment, date }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = () => {

    }

    return (
        <div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-secondary" > Booking for: {name}</h3 >
                    <form onSubmit={handleBooking} className='grid grid-cols-1 justify-items-center gap-2 mt-4'>
                        <input type="text" disabled placeholder={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        {/* <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="name" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" /> */}
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" />
                    </form  >
                </div>
            </div >
        </div>
    );
};

export default BookingModals;