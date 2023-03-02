import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Nav() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <h3>Frances Hughes</h3>
      <nav ref={navRef}>
        <div className="nav-bar">
          <ul className="nav">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/languagesspoken">Languages Spoken</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

// function Nav() {
//   return (
// <div className="nav-bar">
//   <ul>
//     <li>
//       <Link to="/home">Home</Link>
//     </li>
//     <li>
//       <Link to="/languagesspoken">Languages Spoken</Link>
//     </li>
//     <li>
//       <Link to="/contact">Contact</Link>
//     </li>
//   </ul>
// </div>
//   );
// }

export default Nav;
