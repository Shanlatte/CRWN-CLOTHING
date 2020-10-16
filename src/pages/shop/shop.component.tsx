import React, { useEffect } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

import { useDispatch } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const ShopPage: React.FC<RouteComponentProps> = ({ match }) => {
    // const updatedCollections = useSelector((state: RootState) => state.shop.collections)
    let unsubscribeFromSnapshot = null;
    const dispatch = useDispatch();

    useEffect(() => {
        const collectionRef = firestore.collection('collections');

        unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapShot);
            dispatch(updateCollections(collectionMap));
        });

    }, [unsubscribeFromSnapshot])

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

export default ShopPage;