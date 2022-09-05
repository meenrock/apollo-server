const {users} = require("../userData")

const resolvers = {
    Query: {
        fetchUsers() {
            return users
        }
    },
}

module.exports = {resolvers}