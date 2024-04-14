// import React from 'react';

import { Link } from "react-router-dom";

import book1 from '../../src/assets/book1.jpg'

const Hero = () => {
    return (
        <div>
            <div className="h-96 bg-base-200 mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={book1} className="ml5 w-56 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                        <p className="py-6 text-lg font-semibold">
                            Books are portals to myriad worlds, fostering imagination, knowledge, empathy, and growth, enriching lives with stories that transcend boundaries and time.</p>
                        <Link to="/listedbooks"><a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white font-semibold">View the List</span>
                        </a></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;