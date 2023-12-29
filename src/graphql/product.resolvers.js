const ProductsService = require("./../services/product.service");
const service = new ProductsService();

const getProduct = (_, { id }) => {
  return service.findOne(id);
};

const getProducts = (_, args) => {
  return service.find({});
};

const addProduct = async (_, { input }) => {
  return service.create(input);
};

const updateProduct = (_, { id, input }) => {
  return service.update(id, input);
};

const deleteProduct = async (_, { id }) => {
  await service.delete(id);
  return id;
};

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
