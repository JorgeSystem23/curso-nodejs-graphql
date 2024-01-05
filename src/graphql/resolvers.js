const { login } = require("./auth.resolvers");
const { addCategory } = require("./category.resolvers");
const { RegularExpression } = require("graphql-scalars");
const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("./product.resolvers");

const CategoryNameType = new RegularExpression(
  "CategoryNameType",
  /^[a-zA-Z0-9]{3,8}$/
);

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
    addCategory,
  },
  CategoryNameType,
};

module.exports = resolvers;
