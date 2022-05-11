import React from 'react';

const TestimonialCard = ({ info }) => {
  const { img, name, area, des } = info;
  return (
    <section>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{des}</p>
        </div>
        <div className="flex px-4 md:px-10 items-center mb-5">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="">
            <h3 className="font-bold text-xl text-primary">{name}</h3>
            <h5 className="font-medium text-md text-secondary">{area}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
