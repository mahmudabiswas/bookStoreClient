import React, { useEffect, useState } from "react";
import ColorThem from "./colorThem";
import DropDown from "./DropDown";
import SearchBar from "./SearchBar";
import Logo from "./logo";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/course">Course</NavLink>
      </li>
      <li>
        <NavLink to="/Contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar dark:bg-slate-900 dark:text-white bg-red-400 text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content dark:bg-slate-900 dark:text-white bg-red-400  rounded-md z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        {/* logo */}

        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      {/* navbar ends */}
      <div className="navbar-end">
        {/* search bar */}
        <SearchBar />
        {/* color them */}
        <ColorThem />
        {/* dropdown */}
        <DropDown />
      </div>
    </div>
  );
};

export default Navbar;
