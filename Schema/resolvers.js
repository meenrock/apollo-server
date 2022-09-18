import { GraphQLUpload } from 'graphql-upload'

const {users} = require("../userData")

const resolvers = {
    Upload: GraphQLUpload, 

    Query: {
        fetchUsers() {
            return users
        }
    },

    Mutation: {
        createUser(parent,args) {
            const newUser = args;
            users.push(newUser);
        },
    },
}

module.exports = {resolvers}