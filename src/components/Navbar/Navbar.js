import ArrowUp from "assets/arrow-up.svg";
import Hamburger from "assets/hamburger.svg";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import {Desktop, Mobile} from "../Responsive/Responsive";
import KMKLogo from "../../assets/KMK-logo-small.svg";

export default function Navbar(isHomePage = false) {
  const [navToggled, setNavToggled] = useState(false);
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
  // const currentPage = window.location.pathname === "/" ? "home" : window.location.pathname.slice(1);

  const handleNavToggled = () => {
    setNavToggled(!navToggled);
  };

  return (
    <div className="nav-wrapper">
      <div className="nav-mobile-button" onClick={handleNavToggled}>
        <img src={navToggled ? ArrowUp : Hamburger} alt="toggle-icon"/>
      </div>
      <div
        className="nav"
        style={
          isMobile && navToggled
            ? {
              background:
                "linear-gradient(180deg, rgba(121, 163, 202, 0.64) 0%, #79a3ca 100%)",
            }
            : {}
        }
      >
        <a
          href="/"
          className="nav-title"
          style={
            isMobile && !navToggled
              ? {
                background:
                  "linear-gradient(180deg, #cfe7e7 0%, #ffefdc 100%)",
              }
              : {}
          }
        >
          <Desktop>
            <img src={KMKLogo} className="nav-logo" alt="KMK-logo"/>
          </Desktop>
          <Mobile>
            {isHomePage
              ? <img src={KMKLogo} className="nav-logo" alt="KMK-logo"/>
              : <div className="nav-logo"/>
            }
          </Mobile>
          <p>KMK Fasilkom UI</p>
        </a>
        {(isMobile && navToggled) || !isMobile ? (
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="division">Divisi</Link>
            </li>
            <li>
              <Link to="gallery">Galeri</Link>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}
