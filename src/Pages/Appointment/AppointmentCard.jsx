import React from 'react';
import Button from '../Shared/Button';

const AppointmentCard = ({ booking }) => {
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
          <div class="">
            <Button>Book Appointment</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCard;
