import React, { useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navLinks = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/appointment', name: 'Appointment' },
    { id: 3, path: '/reviews', name: 'Reviews' },
    { id: 4, path: '/contact', name: 'Contact Us' },
    { id: 5, path: '/about', name: 'About' },
  ];
  console.log(drawerOpen);
  return (
    <section
      style={{ maxWidth: '1000px' }}
      className="container px-3 mx-auto relative"
    >
      <div className="navbar bg-primary rounded-full mt-1 text-black flex">
        <div className="flex justify-between items-center w-full">
          <div
            className={`drawer rounded lg:hidden absolute left-0 top-0 bg-accent ${
              drawerOpen ? 'w-2/3 backdrop-blur-50' : 'hidden'
            } `}
          >
            <div className="drawer-side rounded">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu p-4 overflow-y-auto bg-base-100 text-base-content w-full">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Doctors Portal
          </Link>

          <div onClick={() => setDrawerOpen(!drawerOpen)}>
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <AiOutlineMenuUnfold size={25} />
            </label>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
