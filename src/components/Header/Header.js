import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    const [loggedInuser,setLoggedInUser]=useContext(userContext)
    return (
        <div>
            <header className="header">
                <img src={logo} alt="" />
                <nav>
                    <Link to="/shop">Shop</Link>
                    <Link to="/review">Order Review</Link>
                    <Link to="/inventory">Manage Inventory</Link>
                    <Link onClick={()=>setLoggedInUser({})}>Sign Out</Link>
                </nav>
            </header>
        </div>
    );
};

export default Header;