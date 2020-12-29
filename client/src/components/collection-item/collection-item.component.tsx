import React from 'react';
import { useDispatch } from 'react-redux'

import './collection-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

import { ICollectionItemProps } from '../../data-types/collection-preview-types';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem: React.FC<ICollectionItemProps> = ({ item }) => {
    const { name, price, imageUrl } = item;
    const dispatch = useDispatch();

    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton onClick={() => dispatch(addItem(item))} inverted>
                Add to cart
            </CustomButton>
        </div>
    )
}

export default CollectionItem;