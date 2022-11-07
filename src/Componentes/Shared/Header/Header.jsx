import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 p-4 bg-white text-gray-800 justify-center">
      <div className='container mx-auto'>
      <div className="flex justify-between h-16">
        <Link
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <h5 className="font-bold">Dr.Zara <span className='bold text-blue-600'>Medicly</span></h5>
        </Link>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <NavLink
              onClick={({ isActive }) => (isActive ? "active" : undefined)}
              to="/home"
              className={`flex items-center px-4 -mb-1 `}
            >
              Home{" "}
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/services"
              className="flex items-center px-4 -mb-1"
            >
              Services
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to="/faq" className="flex items-center px-4 -mb-1 ">
              About
            </NavLink>
          </li>

          <li className="flex">
            <NavLink to="/blog" className="flex items-center px-4 -mb-1">
              Blog
            </NavLink>
          </li>
          {/* <li className="flex">
            <button
              to="/"
              className="flex text-purple-700 items-center px-4 -mb-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </button>
          </li> */}
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              className="flex items-center px-4 -mb-1"
            >
              Log Out
            </Link>
          </li>

          <li className="flex">
            <Link to="/profile" className="flex items-center px-2 -mb-1"></Link>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/login"
              className="flex items-center px-4 -mb-1"
            >
              Login{" "}
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/signup"
              className="flex items-center px-4 -mb-1"
            >
              Sign up
            </NavLink>
          </li>
        </ul>
        <div className="md:hidden flex">
          {/* <li className="flex">
            <button
              to="/"
              className="flex text-purple-700 items-center px-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </button>
          </li> */}
          {open ? (
            <XMarkIcon
              onClick={() => setOpen(!open)}
              className="w-7 mt-4 h-7 font-bold bg-red-700 text-white px-2 py-1 text-2xl"
            ></XMarkIcon>
          ) : (
            <Bars3Icon
              onClick={() => setOpen(!open)}
              className="w-7 h-7 mt-4 font-bold"
            ></Bars3Icon>
          )}
        </div>
      </div>
      </div>
      <div
        className={`list_menu md:hidden absolute duration-500 ease-linear  w-full ${
          open
            ? "top-16 w-full left-0 h-auto border-0 bg-purple-700"
            : "top-[-350px]"
        }`}
      >
        <ul className="pl-6">
          <NavLink
            onClick={({ isActive }) => (isActive ? "active" : undefined)}
            to="/home"
            className={`flex items-center px-4 -mb-1 `}
          >
            Home{" "}
          </NavLink>
          <NavLink
            rel="noopener noreferrer"
            to="/courses"
            className="flex items-center px-4 -mb-1"
          >
            Courses
          </NavLink>
          <NavLink to="/faq" className="flex items-center px-4 -mb-1 ">
            FAQ
          </NavLink>

          <NavLink to="/blog" className="flex items-center px-4 -mb-1">
            Blog
          </NavLink>

          <Link
            rel="noopener noreferrer"
            className="flex items-center px-4 -mb-1"
          >
            Log Out
          </Link>

          <Link to="/profile" className="flex items-center px-2 -mb-1">
            <img alt="" className="w-11 rounded-full" />
          </Link>
          <NavLink
            rel="noopener noreferrer"
            to="/login"
            className="flex items-center px-4 -mb-1"
          >
            Login{" "}
          </NavLink>
          <NavLink
            rel="noopener noreferrer"
            to="/signup"
            className="flex items-center px-4 -mb-1"
          >
            Sign up
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;