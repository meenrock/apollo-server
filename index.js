const {ApolloServer, gql} = require('apollo-server-express');
const { typeDefs } = require("./Schema/typedefs");
const { resolvers } = require("./Schema/resolvers");
const express = require('express');

async function startServer() {
    const app = express();
    const server = new ApolloServer({ 
        typeDefs: typeDefs, 
        resolvers: resolvers 
    });

    await server.start();
    server.applyMiddleware({app, path: './graphql'})

    app.listen({ port: 3001}, () => {
        console.log("Server Started on PORT 3001")
    })

}

startServer();

