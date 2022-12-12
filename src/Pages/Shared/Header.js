import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </>

    return (
        <div>    
            <div className="navbar bg-black lg:fixed lg:container lg:px-32 px-4 lg:text-white">
                <div className="navbar-start w-full flex justify-between">
                    <a className="btn btn-ghost normal-case text-xl" href="#home">M.Tonmoy</a>
                  <div className="dropdown relative">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden flex">
                      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </label>
                    <ul tabIndex={0} className="menu absolute right-1 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-md w-52">
                      {menuItems}
                    </ul>
                  </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                  <ul className="menu menu-horizontal px-1 font-bold">
                    {menuItems}
                  </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;