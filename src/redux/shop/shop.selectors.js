import { createSelector } from 'reselect';

const selectShop = state => state.shop;

// this function creates selectCollections (plural) when selectShop is clicked
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

// this function creates selectCollectionsForPreview 
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

// this function creates selectCollection (singular) when collection is clicked
export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );