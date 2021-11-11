import React from 'react'
import './header.css'
import LogoKMK from '../../assets/BigLogoKMK.svg'
import PropTypes from 'prop-types'


const HeaderComp = ({headerTitle}) => {
    return (
        <div className="header">
              <img src={LogoKMK} className="logo" alt="Logo KMK Fasilkom" />
              <h1 className="headerTitle">{headerTitle}</h1>
              <h2 className="tagline">#LuceatLuxVestra</h2>
        </div>
    )
}

HeaderComp.defaultProps = {
    headerTitle : "KMK Fasilkom UI 2021"
}

HeaderComp.propTypes = {
    headerTitle : PropTypes.string
}

export default HeaderComp