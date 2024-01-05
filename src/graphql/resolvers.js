const { login } = require("./auth.resolvers");
const { addCategory, getCategory } = require("./category.resolvers");
const { RegularExpression } = require("graphql-scalars");
const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
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
    category: getCategory,
  },
  Mutation: {
    login,
    addProduct,
    updateProduct,
    deleteProduct,
    addCategory,
  },
  CategoryNameType,
  Category: {
    products: getProductsByCategory,
  },
};

module.exports = resolvers;
