import ArrowUp from 'assets/arrow-up.svg'
import Hamburger from 'assets/hamburger.svg'
import KMKLogo from 'assets/KMK-logo-small.svg'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import './Navbar.css'
export default function Navbar({ navMenu }) {
  const [navToggled, setNavToggled] = useState(false)
  const [windowDimension, setWindowDimension] = useState(null);

  // Check mobile
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

  const isMobile = windowDimension <= 767;
  const currentPage = window.location.pathname === "/" ? "home" : window.location.pathname.slice(1);

  const handleNavToggled = () => {
    setNavToggled(!navToggled)
  }

  return (
    <div className="nav-wrapper">
      <div className="nav-mobile-button" onClick={handleNavToggled}>
        <img src={navToggled ? ArrowUp : Hamburger} alt="toggle-icon" />
      </div>
      <div
        className="nav"
        style={isMobile && navToggled ?
          { background: "linear-gradient(180deg, rgba(121, 163, 202, 0.64) 0%, #79a3ca 100%)" } : {}}
      >
        <a href="/"
          className="nav-title"
          style={isMobile && !navToggled ?
            { background: "linear-gradient(180deg, #cfe7e7 0%, #ffefdc 100%)" } : {}}
        >
          <img src={KMKLogo} className="nav-logo" alt="KMK-logo" />
          <p>KMK Fasilkom UI</p>
        </a>
        {(isMobile && navToggled) | (!isMobile) ?
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="division">Divisi</Link></li>
            <li><Link to="gallery">Galeri</Link></li>
            {/* <li
            key={key}
            style={!isMobile && menu.toLowerCase() === currentPage ? { fontWeight: "bold" } : {}}
            ></li> */}
            {/* {navMenu.map((menu, key) => (
              <li
                key={key}
                style={!isMobile && menu.toLowerCase() === currentPage ? { fontWeight: "bold" } : {}}
              >
                <a href={menu === "Home" ? "/" : `/${menu.toLowerCase()}`}>
                  {!isMobile ? menu : `> ${menu} <`}
                </a>
              </li>
            ))} */}
          </ul>
          : null
        }
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  navMenu: ['Home', 'Divisi', 'Galeri']
}

Navbar.propTypes = {
  navMenu: PropTypes.arrayOf(PropTypes.string)
}
