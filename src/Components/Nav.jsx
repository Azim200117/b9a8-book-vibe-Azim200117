// import React from 'react';

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[16px] font-semibold">
                            <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#23BE0A] mr-5' : 'font-bold mr-5'}><a>Home</a></NavLink>
                            <NavLink to="/listedbooks" className={({ isActive }) => isActive ? 'text-[#23BE0A] mr-5 ' : 'font-bold mr-5'}><a>Listed Books</a></NavLink>
                            <NavLink to="/pagestoread" className={({ isActive }) => isActive ? 'text-[#23BE0A] mr-5 ' : 'font-bold mr-5'}><a>Pages To Read</a></NavLink>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-[27px] font-bold">BookVibe</Link>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[16px] font-semibold">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#23BE0A] mr-5' : 'font-bold mr-5'}>Home</NavLink>
                        <NavLink to="/listedbooks" className={({ isActive }) => isActive ? 'text-[#23BE0A] mr-5 ' : 'font-bold mr-5'}>Listed Books</NavLink>
                        <NavLink to="/pagestoread" className={({ isActive }) => isActive ? 'text-[#23BE0A] mr-5 ' : 'font-bold mr-5'}>Pages To Read</NavLink>
                    </ul>
                </div>
                <div className="navbar-end mr-5">
                    <a className="btn mr-5 text-white text-[16px] font-semibold bg-[#23BE0A]">Sign In</a>
                    <a className="btn text-[16px] text-white font-semibold bg-[#59C6D2]">Sign Out</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;