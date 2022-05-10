import React from 'react';
import testimonial1 from '../../assets/images/people1.png';
import testimonial2 from '../../assets/images/people2.png';
import testimonial3 from '../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const TestimonialInfo = [
    {
      id: 1,
      des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      name: 'Winson Herry',
      area: 'California',
      img: testimonial1,
    },
    {
      id: 2,
      des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      name: 'Sumaiya Akter',
      area: 'Turkey',
      img: testimonial2,
    },
    {
      id: 3,
      des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      name: 'Monira Khatun',
      area: 'Dhaka',
      img: testimonial3,
    },
  ];
  return (
    <section
      style={{ maxWidth: '1400px' }}
      className="container mx-auto px-3 md:px-10"
    >
      <h4 className="text-xl text-secondary font-bold">Testimonial</h4>
      <h2 className="text-4xl text-primary font-medium">
        What Our Patients Says
      </h2>

      <div className="mt-20 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {TestimonialInfo.map((info) => (
          <TestimonialCard key={info.id} info={info} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
