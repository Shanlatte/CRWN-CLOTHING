import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/root-reducer';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'

import './collections-overview.styles.scss'


const CollectionsOverview: React.FC = () => {
    const collections = selectCollectionsForPreview(useSelector((state: RootState) => state))

    return (
        <div className='collections-overview'>
            {collections.map(({ id, ...othersCollectionProps }) => (
                <div key={id}>
                    <CollectionPreview id={id} {...othersCollectionProps} />
                </div>
            ))}
        </div>
    )
}

export default CollectionsOverview;