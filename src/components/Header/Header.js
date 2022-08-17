import LogoKMK from "assets/BigLogoKMK.svg";
import PropTypes from "prop-types";
import "./Header.css";
import {Desktop, Mobile} from "../Responsive/Responsive";

export default function Header({headerTitle, isHomePage}) {
  return (
    <>
      <Desktop>
        <header className="header">
          <img src={LogoKMK} className="logo" alt="Logo KMK Fasilkom"/>
          <h1 className="headerTitle">{headerTitle}</h1>
          <h2 className="tagline">#FamiliaEtBeneficium</h2>
        </header>
      </Desktop>
      <Mobile>
        <header className={`HeaderMobile`} style={
          isHomePage ? {height: "inherit"} : {height: "3rem"}
        }>
          {isHomePage && <img src={LogoKMK} className="logo" alt="Logo KMK Fasilkom"/>}
          <h1 className="headerTitleMobile">{headerTitle}</h1>
          {isHomePage && <h2 className="tagline">#FamiliaEtBeneficium</h2>}
        </header>
      </Mobile>
    </>
  );
}

Header.defaultProps = {
  headerTitle: "KMK Fasilkom UI 2022",
  isHomePage: false,
};

Header.propTypes = {
  headerTitle: PropTypes.string,
  isHomePage: PropTypes.bool,
};
