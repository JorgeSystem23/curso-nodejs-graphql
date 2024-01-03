const { login } = require("./auth.resolvers");
const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("./product.resolvers");

const resolvers = {
  Query: {
    hello: () => "hola putos",
    getPerson: (_, args) =>
      `Hi, my name is ${args.name}, I'm ${args.age} years old!`,
    product: getProduct,
    products: getProducts,
  },
  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct,
  },
};

module.exports = resolvers;
