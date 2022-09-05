const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: Int
        name: String
        status: Boolean
    }

    type Query {
        fetchUsers: [User]
    }
`;

module.exports = { typeDefs }