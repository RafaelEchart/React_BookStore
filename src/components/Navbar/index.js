import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

import './navBar.css';

let menuButton;
let menuCover;

const Navbar = () => {
  const history = useHistory();
  const [selectedPath, setSelectedPath] = useState('');

  useEffect(() => history.listen((location) => {
    setSelectedPath(location.pathname);
  }), [history]);

  useEffect(() => {
    menuButton = document.getElementById('menuButton');
    menuCover = document.getElementById('mobileMenuCover');
    setSelectedPath(history.location.pathname);
  }, []);
  const openMobileMenu = () => {
    menuButton.style.display = 'none';
    menuCover.style.display = 'block';
    menuCover.style.animation = 'open-modal 0.7s ease-out';
  };

  const closeMobileMenu = () => {
    menuButton.style.display = 'block';
    menuCover.style.animation = 'close-modal 0.7s ease-out';

    setTimeout(() => {
      menuCover.style.display = 'none';
    }, 700);
  };
  return (
    <>
      <header className="header">
        <div className="max-width-header">
          <div className="innerDiv_navbar">

            <Link to="/" className="logo">
              Bookstore CMS
            </Link>
            <div className="desktopMenu">
              <input
                className="menu-btn"
                type="checkbox"
                title="Reset Form"
                value="Reset Form"
                id="menu-btn"
              />
              <nav className="mobileNavBackground">
                <div className="menu-icon" id="menuButton" role="button" tabIndex="0" htmlFor="menu-icon" onKeyDown={openMobileMenu} onClick={openMobileMenu}>
                  <span className="navicon" />
                </div>
              </nav>
            </div>

            <div className="topnav desktopMenu-up" id="myTopnav">
              <Link className={`hover_header ${selectedPath === ('/' || false) ? 'selectedOption_NavBar' : 'noSelectedOption_NavBar'}`} to="/">
                Books
              </Link>
              <Link className={`hover_header ${selectedPath === '/categories' ? 'selectedOption_NavBar' : 'noSelectedOption_NavBar'}`} to="/categories">
                Categories
              </Link>

            </div>
          </div>
          <FaUserCircle className="navBar_icon" />
        </div>
      </header>

      <div className="mobileMenuCover" id="mobileMenuCover">
        <div className="firstContainer">
          <span id="closeButton" className="closeButton" role="button" tabIndex="0" onClick={closeMobileMenu} onKeyDown={closeMobileMenu}>X</span>
        </div>
        <div className="mobileMenu">
          <ul>
            <li className="mobileMenuItems">
              <Link to="/" className="mobileMenuItems-a" onClick={closeMobileMenu}>
                Books
              </Link>
            </li>
            <li className="mobileMenuItems">
              <Link to="/categories" className="mobileMenuItems-a" onClick={closeMobileMenu}>
                Categories
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
