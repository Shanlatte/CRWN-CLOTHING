import React from 'react';
import { Link } from 'react-router-dom';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

import { useSelector, useDispatch } from 'react-redux';
import { signOutStart } from '../../redux/user/user.actions';
import { RootState } from '../../redux/root-reducer';


const Header: React.FC = () => {
    const currentUser = useSelector((state: RootState) => state.user.currentUser);
    const hiddenCart = useSelector((state: RootState) => state.cart.hidden);
    const dispatch = useDispatch();

    const signOutAction = () => {
        dispatch(signOutStart())
    }
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <img alt="HOME" className="logo" src={require("../../assets/crown.svg")} />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                {/* <Link className="option" to="/shop">
                    CONTACT
                </Link> */}
                {currentUser ?
                    <div
                        className="option"
                        onClick={signOutAction}>
                        SIGN OUT
                    </div>
                    :
                    <Link className="option" to="/signin"> SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {!hiddenCart ?
                <CartDropdown />
                : null}
        </div>
    )
}

export default Header;