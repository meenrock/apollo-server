const {gpl} = require('apollo-server-express');

const typeDefs = gpl`
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