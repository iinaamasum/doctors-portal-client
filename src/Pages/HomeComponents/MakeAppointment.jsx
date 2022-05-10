import React from 'react';
import appointment from '../../assets/images/appointment.png';
import dentist from '../../assets/images/doctor.png';
import Button from '../Shared/Button';

const MakeAppointment = () => {
  return (
    <section className="my-16 md:my-32">
      <div style={{ backgroundImage: `url(${appointment})` }} class="hero">
        <div class="hero-content flex-col md:flex-row justify-between items-center p-0 -mt-32">
          <div className="w-full md:w-1/2 h-[500px]">
            <img className="center object-cover h-full" src={dentist} alt="" />
          </div>
          <div className="w-full md:w-1/2 md:mt-32 py-20 sm:py-6 px-4">
            <h4 className="text-lg text-secondary">Appointment</h4>
            <h1 class="text-3xl font-bold text-primary">
              Make an appointment Today
            </h1>
            <p class="py-6 text-gray-300">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Button>Get Appointment</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
