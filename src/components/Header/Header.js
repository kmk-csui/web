import LogoKMK from "assets/BigLogoKMK.svg";
import PropTypes from "prop-types";
import "./Header.css";

export default function Header({headerTitle}) {
  return (
    <header className="header">
      <img src={LogoKMK} className="logo" alt="Logo KMK Fasilkom"/>
      <h1 className="headerTitle">{headerTitle}</h1>
      <h2 className="tagline">#LuceatLuxVestra</h2>
    </header>
  );
}

Header.defaultProps = {
  headerTitle: "KMK Fasilkom UI 2021",
};

Header.propTypes = {
  headerTitle: PropTypes.string,
};
