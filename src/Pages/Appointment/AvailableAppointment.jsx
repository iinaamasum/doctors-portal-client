import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard';

const AvailableAppointment = ({ picked }) => {
  const [bookingSlot, setBookingSlot] = useState([]);
  useEffect(() => {
    const url = `fake.json`;
    axios.get(url).then((res) => setBookingSlot(res.data));
  }, []);

  return (
    <section className="">
      <h2 className="text-3xl my-5 text-accent font-semibold text-center">
        Available Appointments on {format(picked, 'PP')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {bookingSlot.map((booking) => (
          <AppointmentCard key={booking._id} booking={booking} />
        ))}
      </div>
    </section>
  );
};

export default AvailableAppointment;
