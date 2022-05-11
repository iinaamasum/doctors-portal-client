import React from 'react';

const ServiceCard = ({ info }) => {
  const { img, title, des } = info;
  return (
    <section className="">
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title tracking-wide text-secondary">{title}</h2>
          <p className="text-accent">{des}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
