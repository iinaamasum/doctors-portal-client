import React, { useState } from 'react';
import Navbar from '../Shared/Navbar';
import AvailableAppointment from './AvailableAppointment';
import CalenderSection from './CalenderSection';

const Appointment = () => {
  const [picked, setPicked] = useState(new Date());
  return (
    <>
      <Navbar />
      <section className="container mx-auto px-4 md:px-10">
        <CalenderSection picked={picked} setPicked={setPicked} />
        <AvailableAppointment picked={picked} />
      </section>
    </>
  );
};

export default Appointment;
