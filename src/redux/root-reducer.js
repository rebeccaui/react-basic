// ACTUALLY his voice is ridiculous
// Reason Redux is tough is because there is SOOOO much set up required
// However, it is worth it.

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});