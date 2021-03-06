import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { GrTwitter } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';
import footerBg from '../../assets/images/footer.png';

const Footer = () => {
  const year = new Date().getFullYear();
  const navLinks = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/appointment', name: 'Appointment' },
    { id: 3, path: '/reviews', name: 'Reviews' },
    { id: 4, path: '/contact', name: 'Contact Us' },
    { id: 5, path: '/about', name: 'About' },
  ];

  const services = [
    { id: 1, name: 'Emergency Checkup', path: '/appointment' },
    { id: 2, name: 'Monthly Checkup', path: '/appointment' },
    { id: 3, name: 'Weekly Checkup', path: '/appointment' },
    { id: 4, name: 'Deep Checkup', path: '/appointment' },
  ];

  return (
    <footer
      style={{ backgroundImage: `url(${footerBg})` }}
      className="bg-cover bg-center"
    >
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10  text-accent">
          <div className="list-none">
            <span className="text-3xl text-primary font-bold">
              Our Services
            </span>
            <ul className="mt-3">
              {services.map((link) => (
                <li className="hover:text-slate-500" key={link.id}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="list-none">
            <span className="text-3xl text-secondary font-bold">
              Important Links
            </span>
            <ul className="mt-3">
              {navLinks.map((link) => (
                <li className="hover:text-slate-500" key={link.id}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-primary text-2xl font-bold">OUR ADDRESS</h2>
            <h3 className="text-md mt-3">New York - 101010 Hudson</h3>
            <h3 className="text-md mt-3">Phone: +880150000000</h3>
            <h3 className="text-md mt-3">Email: iinaamasum@gamil.com</h3>
          </div>
        </div>
        <div className="footer items-center p-4 text-accent">
          <div className="items-center grid-flow-col">
            <Link to="/">
              <img className="h-20" src={logo} alt="" />
            </Link>
            <p className="text-lg">
              Copyright &copy; {year} - All right reserved to{' '}
              <span className="text-red-600">
                {' '}
                <a
                  href="https://github.com/iinaamasum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  iinaamasum
                </a>
              </span>
            </p>
          </div>
          <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <div className="text-accent flex justify-center items-center">
              <a
                href="https://www.facebook.com/iinaamasum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook
                  size={40}
                  className="mr-3 cursor-pointer hover:text-slate-400"
                />
              </a>
              <a
                href="https://github.com/iinaamasum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub
                  size={40}
                  className="mr-3 cursor-pointer hover:text-slate-400"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/iinaamasum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin
                  size={40}
                  className="mr-3 cursor-pointer hover:text-slate-400"
                />
              </a>
              <a
                href="https://twitter.com/iinaamasum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrTwitter
                  size={40}
                  className="mr-3 cursor-pointer hover:text-slate-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
