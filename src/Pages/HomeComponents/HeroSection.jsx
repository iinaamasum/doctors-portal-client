import React from 'react';
import bg from '../../assets/images/bg.png';
import heroImg from '../../assets/images/chair.png';

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="hero min-h-screen bg-no-repeat bg-center container px-1 sm:px-4 lg:px-10 mx-auto"
    >
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
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
