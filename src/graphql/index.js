const { ApolloServer } = require("apollo-server-express");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const { loadFiles } = require("@graphql-tools/load-files");

const resolvers = {
  Query: {
    hello: () => "hola putos",
    getPerson: (_, args) =>
      `Hi, my name is ${args.name}, I'm ${args.age} years old!`,
    getProduct: () => {
      return {
        id: "1",
        name: "product 1",
        price: "Q15.50",
        description: "Producto con bastante tema",
        urlImage: "http://www.google.com",
        createdAt: new Date().toISOString(),
      };
    },
  },
};

const useGraphql = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles("./src/**/*.graphql"),
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });
  await server.start();
  server.applyMiddleware({ app });
};

module.exports = useGraphql;
