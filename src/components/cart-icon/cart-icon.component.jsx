import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDisatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

// selector takes slice of state
// uses memoization: the linear caching of the selector's value to be used later
const mapStateToProps = state => ({
    // itemCount taken from cart.selectors.js
    itemCount: selectCartItemsCount(state)
});

export default connect(
    mapStateToProps,
    mapDisatchToProps
)(CartIcon);