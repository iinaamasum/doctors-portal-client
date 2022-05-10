import React from 'react';
import bg from '../../assets/images/bg.png';
import Navbar from '../Shared/Navbar';
import CareSection from './CareSection';
import ContactUs from './ContactUs';
import HeroInfo from './HeroInfo';
import HeroSection from './HeroSection';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

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
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;
