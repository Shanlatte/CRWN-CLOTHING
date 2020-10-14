import React from 'react';
import { useSelector } from 'react-redux'

import { selectCartTotal, selectCartItems } from '../../redux/cart/cart.selector'
import { RootState } from '../../redux/root-reducer';

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.styles.scss'

const CheckoutPage: React.FC = () => {
    const cartItems = selectCartItems(useSelector((state: RootState) => state));
    const cartTotal = selectCartTotal(useSelector((state: RootState) => state));

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>

                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            { cartItems.map(cartItem => <CheckoutItem key={cartItem.id} {...cartItem} />)}
            <div className='total'>
                <span>TOTAL: {cartTotal}</span>
            </div>
        </div>
    )
}

export default CheckoutPage;