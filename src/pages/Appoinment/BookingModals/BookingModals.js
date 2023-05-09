import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContex } from '../../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModals = ({ treatment, setTreatment, date, refetch }) => {
    const { _id, name, slots, price } = treatment;
    const { user } = useContext(AuthContex);

    const formattedDate = format(date, 'PP');

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const phone = event.target.phone.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            email: user.email,
            patient: user.displayName,
            appoinmentDate: formattedDate,
            slot,
            phone,
            price
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTreatment(null)
                if (data.acknowledged) {
                    toast.success(`Appoinment is set,${formattedDate} at ${slot}`)
                    refetch()
                }
                else {
                    toast.error(data.message)
                }

            })
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
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="name" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" />
                    </form  >
                </div>
            </div >
        </div>
    );
};

export default BookingModals;