import React, { useEffect } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';


import { useDispatch, useSelector } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { RootState } from '../../redux/root-reducer';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage: React.FC<RouteComponentProps> = ({ match }) => {
    const loading = useSelector((state: RootState) => state.shop.isFetching);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCollectionsStartAsync());
    }, [dispatch]);

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
        </div>
    )
}

export default ShopPage;