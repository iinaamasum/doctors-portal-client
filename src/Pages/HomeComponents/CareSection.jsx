import React from 'react';
import care from '../../assets/images/treatment.png';
import Button from '../Shared/Button';

const CareSection = () => {
  return (
    <section className="my-16 md:my-24">
      <div className="hero">
        <div className="hero-content flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2">
            <img
              className="w-full h-[370px] sm:h-[500px] rounded-lg"
              src={care}
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Button>Contact Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareSection;
