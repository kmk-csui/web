import React, { useState, useEffect } from 'react'
import './navbar.css'
import KMKLogo from './../../assets/KMK-logo-small.svg'
import ArrowUp from './../../assets/arrow-up.svg'
import PropTypes from 'prop-types'

const Navbar = ({ navMenu }) => {
  const [navToggled, setNavToggled] = useState(false)
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;
  const currentPage = window.location.pathname === "/" ? "home" : window.location.pathname.slice(1);

  const handleNavToggled = () => {
    setNavToggled(!navToggled)
  }

  return (
    <div className="nav-wrapper">
      <button className="nav-mobile-icon" onClick={handleNavToggled}>
        <img src={ArrowUp} alt="Navbar" />
      </button>
      <div className="nav">
        <a href="/" className="nav-title">
          <img src={KMKLogo} className="nav-logo" alt="KMK-logo" />
          <p>KMK Fasilkom UI</p>
        </a>
        {(isMobile && navToggled) | (!isMobile) ?
          <ul>
            {navMenu.map((menu, key) => (
              <li 
                key={key} 
                className="nav-item" 
                style={!isMobile && menu.toLowerCase() === currentPage ? {fontWeight: "bold"} : {}}>
                  <a href={menu === "Home" ? "/" : `/${menu.toLowerCase()}`}>
                    {!isMobile ? menu : `> ${menu} <`}
                  </a>
              </li>  
            ))}
          </ul>
          : null
        }
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  navMenu : ['Home', 'Divisi', 'Galeri']
}

Navbar.propTypes = {
  navMenu : PropTypes.arrayOf(PropTypes.string)
}

export default Navbar