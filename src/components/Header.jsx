import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="heading">
        <ul className="header">
          <li className="github">
            <Link to="https://github.com/Frances-Hughes">
              My Github Profile
            </Link>
          </li>
          <li className="linkedin">
            <Link to="https://www.linkedin.com/in/frances-l-hughes/">
              My LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
