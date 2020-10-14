import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import './cart-icon.styles.scss';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { RootState } from '../../redux/root-reducer';

const CartIcon: React.FC = () => {
    const itemCount: number = selectCartItemsCount(useSelector((state: RootState) => state));
    const dispatch = useDispatch();

    return (
        <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
            <img alt="cart" className="shopping-icon" src={require("../../assets/shopping-bag.svg")} />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

export default CartIcon;