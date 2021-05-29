import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

/* this is a query component. 
 * it will receive the actual GraphQL query we want to make.
 * it will fetch the data and will return it as a function.
*/

const GET_COLLECTIONS = gql`
    {
        collections {
            id
            title
            items {
                id
                name
                price
                imageUrl
            }
        }
    }
`;

const CollectionsOverviewContainer = () => (
    <Query query={GET_COLLECTIONS}>
    {
        ({ loading, data }) => {
            if (loading) return <Spinner />
            return <CollectionsOverview collections={data.collections} />
        }
    }
    </Query>
)

export default CollectionsOverviewContainer;