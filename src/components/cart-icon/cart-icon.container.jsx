import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartIcon from './cart-icon.component';

// Use Mutation component from Apollo
// This is the function thaat changes cartHidden property
const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`;

// Define the container
// Recieves Mutation query
const CartIconContainer = () => (
    <Mutation mutation={TOGGLE_CART_HIDDEN} >
        {toggleCartHidden => <CartIcon toggleCartHidden={toggleCartHidden} />}
    </Mutation>
);

export default CartIconContainer;