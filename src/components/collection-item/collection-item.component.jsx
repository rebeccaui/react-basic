import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
    // destructure properties from the item
    const { name, price, imageUrl } = item;
    return (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted>
            Add to cart
        </CustomButton>
    </div>
)};

// function addItem will receive the item as a property, pass it into addItem 
// action creator, which gives us back the object with addItem property, payload
// is equal to the item that gets passed in, and then we dispatch that new item
// into our store to go through our redux flow
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);