import React from 'react';

const AppointmentCard = ({ booking, setTreatment }) => {
  const { name, slots } = booking;
  return (
    <section>
      <div class="card bg-base-100 shadow-xl text-center">
        <div class="card-body">
          <h2 class="text-2xl font-bold text-secondary">{name}</h2>
          <div className="">
            <p>
              {slots.length ? (
                slots[0]
              ) : (
                <span className="text-red-600 font-bold">
                  All slot has been booked.
                </span>
              )}
            </p>

            <p>
              {slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available
            </p>
          </div>
          <div className="">
            <label
              onClick={() => setTreatment(booking)}
              htmlFor="treatment-modal"
              class="btn btn-primary bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] outline-none border-0 shadow text-white px-10"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCard;
