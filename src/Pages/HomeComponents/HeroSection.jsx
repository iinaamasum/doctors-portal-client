import React from 'react';
import heroImg from '../../assets/images/chair.png';
import Button from '../Shared/Button';

const HeroSection = () => {
  return (
    <div className="hero py-14 md:py-32 bg-no-repeat bg-center container px-1 sm:px-4 lg:px-10 mx-auto mb-32 md:mb-10">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="w-full md:w-1/2">
          <img
            src={heroImg}
            alt=""
            className="rounded-lg shadow-2xl w-full md:h-[300px] lg:h-auto"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
