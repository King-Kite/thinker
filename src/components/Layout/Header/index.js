import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
  	<header className="bg-orange-400 p-2 w-full">
      <MobileNav show={show} setShow={setShow} />

      <div className="flex justify-between items-center">
        <div className="flex justify-between text-gray-300 text-xl mx-4 md:mx-5 lg:mx-6 w-1/4 lg:w-1/6">
          <i className="fab fa-twitter hover:text-gray-500 hover:text-2xl"></i>
          <i className="fab fa-facebook hover:text-gray-500 hover:text-2xl"></i>
          <i className="fab fa-instagram hover:text-gray-500 hover:text-2xl"></i>
          <i className="fab fa-whatsapp hover:text-gray-500 hover:text-2xl"></i>
        </div>  
        <div className="mx-2 md:mx-4 lg:mx-6 w-50 h-50">
          <div onClick={() => setShow(!show)} className="md:hidden cursor-pointer">
            <i className="fas fa-bars text-gray-300 text-xl hover:text-gray-500 hover:text-2xl mx-4 w-100 h-100"></i>
          </div>
          <div className="hidden md:flex">
            <ul className="md:flex md:justify-around text-gray-300 text-xl md:px-2 lg:px-4">
              <li className="md:mx-4 lg:mx-6 hover:text-gray-500">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="md:mx-4 lg:mx-6 hover:text-gray-500">
                <NavLink to="/posts">Posts</NavLink>
              </li>
              <li className="md:mx-4 lg:mx-6 hover:text-gray-500">
                <NavLink to="/create">Create Post</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;