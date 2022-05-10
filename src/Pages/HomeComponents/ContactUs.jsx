import React from 'react';
import contactBg from '../../assets/images/appointment.png';

const ContactUs = () => {
  return (
    <div
      style={{ backgroundImage: `url(${contactBg})` }}
      className="bg-cover bg-center"
    >
      <section
        style={{ maxWidth: '1400px' }}
        className="container mx-auto px-3 py-5 md:px-10 mt-24 md:mt-32"
      >
        <h4 className="text-xl font-bold text-secondary text-center">
          Contact Us
        </h4>
        <h2 className="text-4xl font-medium text-primary text-center">
          Stay Connected With Us
        </h2>
        <form className="w-full md:w-1/2 p-5 mx-auto">
          <div className="w-full mb-1">
            <label htmlFor="email" className="mb-1 font-medium text-lg">
              Email
            </label>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              class="input input-bordered input-primary w-full"
            />
          </div>
          <div className="w-full mb-1">
            <label htmlFor="subject" className="mb-1 font-medium text-lg">
              Subject
            </label>
            <br />
            <input
              type="text"
              placeholder="Subject here"
              class="input input-bordered input-primary w-full"
            />
          </div>
          <div className="w-full">
            <label htmlFor="opinion" className="mb-1 font-medium text-lg">
              Feedback
            </label>
            <br />

            <textarea
              cols="30"
              rows="5"
              type="text"
              placeholder="Enter your feedback"
              style={{ border: '1px solid #0FCFEC' }}
              class="rounded-lg p-3 focus:outline-offset-2 resize-none focus:ring-inset input-bordered input-primary w-full"
            ></textarea>
          </div>
          <div className="text-center">
            <input
              type="submit"
              value="Send Now"
              className="btn btn-primary bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] outline-none border-0 shadow text-white px-10 mt-2"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
