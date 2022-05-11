import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bgChair from '../../assets/images/bg.png';
import heroImg from '../../assets/images/chair.png';

const CalenderSection = ({ picked, setPicked }) => {
  return (
    <section
      style={{
        background: `url(${bgChair})`,
      }}
      className="bg-cover bg-center bg-no-repeat"
    >
      <div class="hero py-14">
        <div class="hero-content flex-col md:flex-row-reverse">
          <img
            src={heroImg}
            class="w-full md:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div className="w-full md:w-1/2 mx-auto">
            <DayPicker mode="single" selected={picked} onSelect={setPicked} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalenderSection;
