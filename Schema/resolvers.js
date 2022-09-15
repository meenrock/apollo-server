const {users} = require("../userData")

const resolvers = {
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