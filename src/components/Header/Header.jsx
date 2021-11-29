import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                Samurai
            </div>
            <nav>
                <a href="/">Home</a>
                <a href="http://">About</a>
                <a href="http://">Contact</a>
            </nav>
        </div>
    );
}
 
export default Header;