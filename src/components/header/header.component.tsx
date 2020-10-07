import React from 'react';
import { Link } from 'react-router-dom';


import './header.styles.scss';

const Header: React.FC = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <img alt="HOME" className="logo" src={require("../../assets/crown.svg")} />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default Header;