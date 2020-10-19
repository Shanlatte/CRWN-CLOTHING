import React, { useEffect, useState } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { useDispatch } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage: React.FC<RouteComponentProps> = ({ match }) => {
    const [loading, setLoading] = useState<boolean>(true);
    let unsubscribeFromSnapshot = null;
    const dispatch = useDispatch();

    useEffect(() => {
        const collectionRef = firestore.collection('collections');

        unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapShot);
            dispatch(updateCollections(collectionMap));
            setLoading(false);
        });

    }, [unsubscribeFromSnapshot])

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
        </div>
    )
}

export default ShopPage;