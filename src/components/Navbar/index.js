import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';

import "./navBar.css";
let menuButton
let closeButton
let menuCover

const Navbar = () => {

  const history = useHistory()
  const [selectedPath, setSelectedPath] = useState('')
    
  
   useEffect(() => {
      return history.listen((location) => { 
        setSelectedPath(location.pathname)
      }) 
   },[history]) 

  
  useEffect(()=>{
    menuButton = document.getElementById("menuButton");
    closeButton = document.getElementById("closeButton");
    menuCover = document.getElementById("mobileMenuCover");
    setSelectedPath(history.location.pathname)
  

  }, [])
  const openMobileMenu = () => {
    menuButton.style.display = "none";
    menuCover.style.display = "block";
    menuCover.style.animation= 'open-modal 0.7s ease-out';
    
    // main.style.filter = 'blur(8px)';

  };

  const closeMobileMenu = () => {

    menuButton.style.display = 'block';
    menuCover.style.animation = 'close-modal 0.7s ease-out';

    setTimeout(() => {
      menuCover.style.display = 'none';
    }, 700);

  // main.style.filter = 'blur(0px)';

  };
  return (
    <React.Fragment>
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
              <label className="menu-icon" id="menuButton" onClick={openMobileMenu}>
                <span className="navicon"></span>
              </label>
            </nav>
          </div>

          <div className="topnav desktopMenu-up" id="myTopnav">
            <Link className={`hover_header ${selectedPath === ('/'|| false) ? 'selectedOption_NavBar' : 'noSelectedOption_NavBar'}`} to="/">
              Books
            </Link>
            <Link className={`hover_header ${selectedPath === '/categories' ? 'selectedOption_NavBar' : 'noSelectedOption_NavBar'}`} to="/categories">
              Categories
            </Link>
           
          </div>
          </div>
          <FaUserCircle className="navBar_icon"/>
        </div>
      </header>

      <div className="mobileMenuCover" id="mobileMenuCover">
        <div className="firstContainer">
          <span id="closeButton" className="closeButton" onClick={closeMobileMenu} >X</span>
        </div>
        <div className="mobileMenu">
          <ul>
            <li className="mobileMenuItems">
              <a href="#portfolio" className="mobileMenuItems-a">
                Portfolio
              </a>
            </li>
            <li className="mobileMenuItems">
              <a href="#about" className="mobileMenuItems-a">
                About
              </a>
            </li>
            <li className="mobileMenuItems">
              <a href="#contact" className="mobileMenuItems-a">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Navbar;
