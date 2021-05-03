// ACTUALLY his voice is ridiculous
// Reason Redux is tough is because there is SOOOO much set up required
// However, it is worth it.

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// this is for local storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// persist the cart
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);