import React from 'react'

import './cart-item.styles.scss';

import { ICartItemProps } from '../../data-types/collection-preview-types';

const CartItem: React.FC<ICartItemProps> = ({ imageUrl, price, name, quantity }) => {
    return (
        <div className='cart-item'>
            <img alt='item' src={imageUrl} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    )
}

export default CartItem;