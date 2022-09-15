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

    type Mutation {
        createUser(name: String, status: Boolean): [User]
    }

`;

module.exports = { typeDefs }