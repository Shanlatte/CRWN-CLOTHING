import React from 'react';

import { SHOP_DATA } from '../../data/shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage: React.FC = () => {
    return (
        <div className="shop-page">
            {
                SHOP_DATA.map(({ id, ...othersCollectionProps }) => (
                    <div key={id}>
                        <CollectionPreview id={id} {...othersCollectionProps} />
                    </div>
                ))
            }
        </div>
    )
}

export default ShopPage;