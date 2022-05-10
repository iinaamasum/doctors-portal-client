import React from 'react';
import bg from '../../assets/images/bg.png';
import Navbar from '../Shared/Navbar';
import CareSection from './CareSection';
import HeroInfo from './HeroInfo';
import HeroSection from './HeroSection';
import MakeAppointment from './MakeAppointment';
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
      <CareSection />
      <MakeAppointment />
    </div>
  );
};

export default Home;
