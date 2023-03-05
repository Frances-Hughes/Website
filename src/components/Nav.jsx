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
      <h3>Frances Hughes (She/her)</h3>
      <nav ref={navRef}>
        <div className="nav-bar">
          <ul className="nav">
            <li>
              <Link to="/">About Me</Link>
            </li>
            <li className="cv">
              <Link to="/cv">My CV</Link>
            </li>
            <li>
              <Link to="/languagesspoken">Languages I speak</Link>
            </li>
            <li className="tech">
              <Link to="/tech">Tech I've learned</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
            <li>
              <Link to="/hobbies">Hobbies</Link>
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

export default Nav;
