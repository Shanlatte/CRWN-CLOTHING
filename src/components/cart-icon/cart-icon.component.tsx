import React from 'react';

import './cart-icon.styles.scss';
import { useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
            <img alt="cart" className="shopping-icon" src={require("../../assets/shopping-bag.svg")} />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;