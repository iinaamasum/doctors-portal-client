import { format } from 'date-fns';
import React from 'react';

const TreatmentModal = ({ treatment, picked }) => {
  return (
    <section>
      <input type="checkbox" id="treatment-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="treatment-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-center text-secondary">
            {treatment.name}
          </h3>
          <form className="w-11/12 mx-auto">
            <div class="form-control w-full my-3">
              <input
                type="text"
                value={format(picked, 'PP')}
                disabled
                class="input input-bordered w-full font-semibold"
              />
            </div>
            <select class="select select-secondary w-full my-3">
              <option selected>{treatment?.slots[0]}</option>
              {treatment?.slots.map((slot) => (
                <option>{slot}</option>
              ))}
            </select>
            <div class="form-control w-full my-3">
              <input
                type="text"
                placeholder="Name"
                class="input input-bordered w-full"
              />
            </div>
            <div class="form-control w-full my-3">
              <input
                type="text"
                placeholder="email"
                class="input input-bordered w-full"
              />
            </div>
            <div class="form-control w-full my-3">
              <input
                type="text"
                placeholder="phone"
                class="input input-bordered w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TreatmentModal;
