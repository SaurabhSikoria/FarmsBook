import React from 'react'
import logo from './images/farmsbooklogo.png';

const Header = () => {
    return (
        <header className="App-header">
            <div className="header-text">
                <img src={logo} alt="Logo" />
                <h1>FarmsBook</h1>
            </div>
            {/* <img src="" alt="" className="menu-bar"/> */}
            <h2>menu</h2>
        </header>
    )
}

export default Header;