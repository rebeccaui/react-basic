import React from 'react';
import { Route } from 'react-router-dom';

// import CollectionPreview from '../../components/collection-preview/collection-preview';
import { default as CollectionsOverview } from '../../components/collections-overview/collections-overview.container';
import { default as CollectionPage } from '../collection/collection.container';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        {/* this makes fetching the correct path simpler */}
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

export default ShopPage;