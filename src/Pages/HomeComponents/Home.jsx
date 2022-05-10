import React from 'react';
import bg from '../../assets/images/bg.png';
import Navbar from '../Shared/Navbar';
import HeroInfo from './HeroInfo';
import HeroSection from './HeroSection';
import Services from './Services';

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
      <Services />
    </div>
  );
};

export default Home;
