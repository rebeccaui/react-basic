import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

// selector takes slice of state
// uses memoization: the linear caching of the selector's value to be used later
const mapStateToProps = createStructuredSelector ({
    // itemCount taken from cart.selectors.js
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps)(CartIcon);