import React from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { RootState } from '../../redux/root-reducer';
import { selectCollection } from '../../redux/shop/shop.selector';


import './collection.styles.scss';

import { TParams } from '../../data-types/shop-types';

const CollectionPage: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
    const collectionId: string = match.params.collectionId;
    const collection = selectCollection(collectionId)(useSelector((state: RootState) => state));

    return (
        <div className='collection-page'>
            <h2 className='title'>{collection?.title}</h2>
            <div className='items'>
                {collection?.items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default CollectionPage;