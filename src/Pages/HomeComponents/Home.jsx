import React from 'react';
import bg from '../../assets/images/bg.png';
import Navbar from '../Shared/Navbar';
import HeroInfo from './HeroInfo';
import HeroSection from './HeroSection';

const Home = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="bg-center bg-no-repeat bg-cover"
      >
        <Navbar />
        <HeroSection />
      </div>

      <HeroInfo />
    </div>
  );
};

export default Home;
