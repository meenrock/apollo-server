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
    server.applyMiddleware({app})

    app.use((req, res) => {
        res.send(`
        <html>
            <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href='https://fonts.googleapis.com/css?family=Sora' rel='stylesheet'>
            <title> System Design </title>
            <style>
                .card {
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                max-width: 300px;
                margin: auto;
                text-align: center;
                font-family: arial;
                }
    
                .price {
                color: grey;
                font-size: 22px;
                }
    
                .card a {
                border: none;
                outline: 0;
                padding: 12px;
                color: white;
                background-color: #000;
                text-align: center;
                cursor: pointer;
                width: 100%;
                font-size: 18px;
                }
    
                .card a:hover {
                opacity: 0.7;
                }
            </style>
            </head>
            <body>
                <div class="card">
                    <img src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/283518021_5142350249137708_5813663700311548488_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHtE7Gj2gQKsZecROf8K8iz1eoVBTxpZmDV6hUFPGlmYHwd7IDeljnBgbOM_T6nXiWR9KqVC43N8wxvHJ4iSAM_&_nc_ohc=2hZxd_MXsz4AX8o1C8T&_nc_ht=scontent.fbkk28-1.fna&oh=00_AT8P3ZpE-fRaABFxnzCPyasNkfAO0FVCvvfliOpv_gS2iQ&oe=63277F1F" alt="mobilecard" style="width:100%">
                    <h1>Apollo GraphQL</h1>
                    <p class="price">Supawat Suntornlimsiri</p>
                    <p>The Server is Running...</p><br>
                    <p><a href="https://meenrock.github.io/supawatpro/">Contact Me Here</a></p>
                </div>
            </body>
        </html>
        `);
    });

    app.listen({ port: 3001}, () => {
        console.log("Server Started on PORT 3001")
    });

}

startServer();

