export const addItemToCart = (cartItems, cartItemToAdd) => {
    // find function finds first item in array that matches specific condition
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        // map function creates a new array 
        // creating new state object to force rerendering
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
            )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}