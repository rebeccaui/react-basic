import { gql } from 'apollo-boost';

// view avaailable mutations and queries available in graphql schema

//add any  more types or values available 
// extend existing graphQL mutations available in the backend
// 
// mUtaation will return true or false
//Type definitions are capitaalized
export const typeDefs = gql`
    extend type Mutation {
        ToggleCartHidden: Boolean!
    }
`;
// specify to Apollo that this method is client side
// uses a client directive @ to do so
const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`;

// defining client side cache options
// Mutation definitions are camelcase
// Apollo uses underscores
// Arguments
// _root refers to a key 
// _args are variables thata get passed into the mutation
// _context includes cache and client itself
// _info contains information about the query or mutation
export const resolvers = {
    Mutation: {
        toggleCartHidden: (
            _root,
            _args,
            { cache }) => {
                const { cartHidden } = cache.readQuery({
                    query: GET_CART_HIDDEN
                });

                //update cache with the opposite data
                cache.writeQuery({
                    query: GET_CART_HIDDEN,
                    data: { cartHidden: !cartHidden }
                });

                return !cartHidden
            }
    }
}