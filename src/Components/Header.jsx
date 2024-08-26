import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <nav className="flex justify-between p-2.5 items-center bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
        <Link to={'/'}>
          <img
            className="w-16 h-16 rounded-full border-none"
            src="https://images.unsplash.com/photo-1615915468538-0fbd857888ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D"
            alt="MyLogo"
          />
        </Link>
        <ul className="flex gap-10 mr-10 text-lg font-semibold">
          <Link to={'/'}>
            <li className="hover:text-sky-100">Home</li>
          </Link>

          <Link to={'/About'}>
            <li className="hover:text-sky-100">About</li>
          </Link>
          <Link to={'/contact'}>
            <li className="hover:text-sky-100">Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
