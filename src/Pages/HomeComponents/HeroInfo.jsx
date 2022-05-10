import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import HeroCard from './HeroCard';

const HeroInfo = () => {
  const cardInfo = [
    {
      id: 1,
      title: 'Opening Hours',
      subTitle: 'Lorem Ipsum is simply dummy text of the pri',
      image: clock,
      bg: 'bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]',
    },
    {
      id: 2,
      title: 'Visit our location',
      subTitle: 'Brooklyn, NY 10036, United States',
      image: marker,
      bg: 'bg-accent',
    },
    {
      id: 3,
      title: 'Contact us now',
      subTitle: '+000 123 456789',
      image: phone,
      bg: 'bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]',
    },
  ];
  return (
    <>
      <section
        style={{ maxWidth: '1500px' }}
        className="mx-auto px-1 sm:px-3 mt-[-100px] mb-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardInfo.map((info) => (
            <HeroCard key={info.id} info={info} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroInfo;
