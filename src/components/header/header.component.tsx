import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

import { IHeaderProps } from '../../data-types/user-types';

const Header: React.FC<IHeaderProps> = ({ currentUser }) => {
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
                {currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin"> SIGN IN</Link>
                }
            </div>
        </div>
    )
}

export default Header;