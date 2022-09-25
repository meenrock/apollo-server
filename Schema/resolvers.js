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

/*const newresolvers = {
    Upload: GraphQLUpload,
    Query: {
        ...userQueries,
    },
    Mutation: {
        ...userMutations,
    }
}*/

module.exports = {resolvers}