const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const { Query } = require('pg');

const typeDefs = `
    type Query {
        hello: String,
        getPerson(name: String!, age: Int!): String!,
        getProduct: Product
    }

    type Product {
        id: ID!
        name: String!
        price: Float!
        description: String!
        urlImage: String!
        createdAt: String!
    }
`;

const resolvers = {
    Query: {
        hello: () => 'hola putos',
        getPerson: (_, args) => `Hi, my name is ${args.name}, I'm ${args.age} years old!`,
        getProduct: () => {
            return {
                id: '1',
                name: 'product 1',
                price: 'Q15.50',
                description: 'Producto con bastante tema',
                urlImage: 'http://www.google.com',
                createdAt: new Date().toISOString()
            }
        }
    }
};

const useGraphql = async (app) => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        playground: true,
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground
        ]
    });
    await server.start();
    server.applyMiddleware({ app });
};

module.exports = useGraphql;