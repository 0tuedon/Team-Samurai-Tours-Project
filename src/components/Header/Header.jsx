import React from 'react';
import logo from '../logo.jpg';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="team logo" srcset=""/>
            </div>
            <nav>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </nav>
        </div>
    );
}
 
export default Header;