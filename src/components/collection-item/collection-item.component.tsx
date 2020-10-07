import React from 'react';

import './collection-item.styles.scss';

import { ICollectionItem } from '../../data-types/collection-preview-types';

const CollectionItem: React.FC<ICollectionItem> = ({ imageUrl, name, price }) => {
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
        </div>
    )
}

export default CollectionItem;