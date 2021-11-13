import React from 'react'
import './navbar.css'
import KMKLogo from './../../assets/KMK-logo-small.svg'
import PropTypes from 'prop-types'

const Navbar = ({ navMenu }) => {
  const currentPage = window.location.pathname === "/" ? "home" : window.location.pathname.slice(1);
  
  return (
    <div className="nav-wrapper">
      <div className="nav">
        <a href="/" className="nav-title">
          <img src={KMKLogo} className="nav-logo" alt="KMK-logo" />
          KMK Fasilkom UI
        </a>
        <div className="nav-right">
          {navMenu.map((menu, key) => (
              <a key={key} href="#" className={`nav-item${menu.toLowerCase() === currentPage ? "-bold" : ""}`}>{menu}</a>  
          ))}
        </div>
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