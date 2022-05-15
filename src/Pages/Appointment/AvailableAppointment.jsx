import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard';
import TreatmentModal from './TreatmentModal';

const AvailableAppointment = ({ picked }) => {
  const [bookingSlot, setBookingSlot] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    const url = `fake.json`;
    axios.get(url).then((res) => setBookingSlot(res.data));
  }, []);

  return (
    <section className="px-0 md:px-10">
      <h2 className="text-3xl my-5 text-accent font-semibold text-center">
        Available Appointments on {format(picked, 'PP')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-center my-10">
        {bookingSlot.map((booking) => (
          <AppointmentCard
            setTreatment={setTreatment}
            key={booking._id}
            booking={booking}
          />
        ))}
      </div>
      {treatment && (
        <TreatmentModal picked={picked} treatment={treatment}></TreatmentModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
