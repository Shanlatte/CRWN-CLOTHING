import React, { lazy, useEffect, Suspense } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';


import { useDispatch, useSelector } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { RootState } from '../../redux/root-reducer';
import Spinner from '../../components/spinner/spinner.component';

const CollectionOverviewWithSpinnerLazy = lazy(()=> import('../../components/collections-overview/collections-overview.component'))
const CollectionPageWithSpinnerLazy = lazy(()=> import('../collection/collection.component'))

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverviewWithSpinnerLazy);
const CollectionPageWithSpinner = WithSpinner(CollectionPageWithSpinnerLazy);

const ShopPage: React.FC<RouteComponentProps> = ({ match }) => {
    const loading = useSelector((state: RootState) => state.shop.isFetching);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCollectionsStart());
    }, [dispatch]);

    return (
        <div className="shop-page">
            <Suspense fallback={<Spinner/>}>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading}  />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading}  {...props} />} />
            </Suspense>
             </div>
    )
}

export default ShopPage;