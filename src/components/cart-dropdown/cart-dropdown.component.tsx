import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';
import { RootState } from '../../redux/root-reducer';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown: React.FC = () => {
    const cartItems = selectCartItems(useSelector((state: RootState) => state));
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
    }

    return (
        <div className='cart-dropdown'>
            <div className='cart-items' >
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} {...cartItem} />
                    ))
                ) : (
                        <span className='empty-message'>Your cart is empty</span>
                    )}
            </div>
            <CustomButton inverted onClick={() => handleClick()}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown;