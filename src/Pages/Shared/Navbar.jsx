import React, { useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { MdCloseFullscreen } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navLinks = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/appointment', name: 'Appointment' },
    { id: 3, path: '/reviews', name: 'Reviews' },
    { id: 4, path: '/contact', name: 'Contact Us' },
    { id: 5, path: '/about', name: 'About' },
  ];
  return (
    <section
      style={{ maxWidth: '1024px' }}
      className="container px-3 mx-auto relative"
    >
      <div className="navbar bg-primary rounded-full mt-1 text-slate-700 flex">
        <div className="flex justify-between items-center w-full mx-3">
          <div
            className={`drawer ml-0 -mt-1 rounded-r lg:hidden absolute left-0 top-0 bg-accent ${
              drawerOpen ? 'w-1/2' : 'hidden'
            } `}
          >
            <div className="drawer-side rounded mx-auto mt-5">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu p-4 overflow-y-auto bg-accent text-base-content w-full">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link className="text-white" to={link.path}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            to="/"
            className="font-bold normal-case text-2xl flex items-center"
          >
            <img className="h-12 w-12 rounded mr-2" src={logo} alt="" />
            <span>Doctors Portal</span>
          </Link>

          <div onClick={() => setDrawerOpen(!drawerOpen)}>
            <label
              tabIndex="0"
              className="btn btn-ghost lg:hidden font-bold text-accent"
            >
              {drawerOpen ? (
                <MdCloseFullscreen size={30} />
              ) : (
                <AiOutlineMenuUnfold size={30} />
              )}
            </label>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {navLinks.map((link) => (
              <li key={link.id} className="mr-1">
                <Link className="text-[16px] font-semibold" to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
