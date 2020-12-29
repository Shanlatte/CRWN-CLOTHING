import React from 'react';
import { useDispatch } from 'react-redux';
import { ICartItemProps } from '../../data-types/collection-preview-types';

import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem: React.FC<ICartItemProps> = ({ ...cartItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;
    const dispatch = useDispatch();

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => dispatch(removeItem(cartItem))}>
                    &#10094;
                </div>
                <span className='value'> {quantity}</span>
                <div className='arrow' onClick={() => dispatch(addItem(cartItem))}>
                    &#10095;
                </div>
            </span>
            <span className='price'>${price}</span>
            <span className='remove-button' onClick={() => dispatch(clearItemFromCart(cartItem))}>
                &#10005;
            </span>
        </div>
    )
}
export default CheckoutItem;

