import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const MobileNav = ({ show, setShow }) => {
  const ref = useRef(null);
  const eventType = "click";

  const handleMouseClick = ({ target }) => {
    !ref?.current?.contains(target) && setShow(false);
  };

  useEffect(() => {
    document.addEventListener(eventType, handleMouseClick, true);

    return () => {
      document.removeEventListener(eventType, handleMouseClick, true);
    };
  }, []);

  return (
    <div ref={ref} className={`${!show && "hidden"} md:hidden absolute bg-orange-500 h-screen top-0 right-0 w-1/2 px-4`}>
      <div onClick={() => setShow(!show)} className="text-right cursor-pointer mt-4">
          <i className="fas fa-window-close text-gray-300 text-3xl hover:text-gray-500 hover:text-4xl mx-1 w-100 h-100"></i>
      </div>
      <ul className="my-3 text-center">
        <li onClick={() => setShow(!show)}>
          <NavLink className="my-5 p-3 rounded bg-orange-300 hover:bg-orange-400 text-gray-700 hover:text-gray-300 text-xl uppercase block" to="/">Home</NavLink>
        </li>
        <li onClick={() => setShow(!show)}>
          <NavLink className="my-5 p-3 rounded bg-orange-300 hover:bg-orange-400 text-gray-700 hover:text-gray-300 text-xl uppercase block" to="/posts">Posts</NavLink>
        </li>
        <li onClick={() => setShow(!show)}>
          <NavLink className="my-5 p-3 rounded bg-orange-300 hover:bg-orange-400 text-gray-700 hover:text-gray-300 text-xl uppercase block" to="/create">Create Post</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default MobileNav;