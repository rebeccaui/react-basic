// this code would normally would be in mapStateToProps
import { createSelector } from 'reselect';

/* 2 types of memoized selectors
    1: inputSelector that doesn't use createSelector
    2: outputSelector that does us inputSelectors and createSelector to build itself
*/

// gets whole state and returns a slice of it
const selectCart = state => state.cart;

// cart object gets passed into function which passes out the cartItems
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

// function that passes cart items into function that give us final cart item count
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
                accumulatedQuantity + cartItem.quantity, 
            0
        )
)