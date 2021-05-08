import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

// this component decides how many products are displayed in the collection-overview on the collections page
// this is the area thaat would need to be modified if we added a carousel overview feature for each collection
const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'> 
        {items
            .filter((item, index) => index < 4)
            .map((item) => (
                <CollectionItem key={item.id} item={item} />
            ))
        }
        </div>
    </div>
)

export default CollectionPreview;