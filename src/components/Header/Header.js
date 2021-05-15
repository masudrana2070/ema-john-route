import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div>
            <header className="header">
                <img src={logo} alt="" />
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/review">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                </nav>
            </header>
        </div>
    );
};

export default Header;