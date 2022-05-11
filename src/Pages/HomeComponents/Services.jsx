import React from 'react';
import img2 from '../../assets/images/cavity.png';
import img1 from '../../assets/images/fluoride.png';
import img3 from '../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const Services = () => {
  const serviceInfo = [
    {
      id: 1,
      title: 'Fluoride Treatment',
      des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: img1,
    },
    {
      id: 2,
      title: 'Cavity Filling',
      des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: img2,
    },
    {
      id: 3,
      title: 'Teeth Whitening',
      des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      img: img3,
    },
  ];
  return (
    <section className="my-16 md:my-24 container mx-auto px-4 md:px-10">
      <div className="text-center my-14">
        <h5 className="text-secondary font-bold text-2xl">Our Services</h5>
        <h2 className="text-4xl">The Best Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {serviceInfo.map((info) => (
          <ServiceCard key={info.id} info={info} />
        ))}
      </div>
    </section>
  );
};

export default Services;
