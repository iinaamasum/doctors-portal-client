import React from 'react';

const ServiceCard = ({ info }) => {
  const { img, title, des } = info;
  return (
    <section className="">
      <div class="card bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-accent tracking-wide">{title}</h2>
          <p>{des}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
