import React from 'react';

import './checkout-item.styles.scss'

// Pass in the entire item, because we will need to change the quantity
const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
    <div className='checkout-item'>
        <div claassName='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='prics'>{price}</span>
        <div className='remove-button'>&#10005;</div>
    </div>
)

export default CheckoutItem;