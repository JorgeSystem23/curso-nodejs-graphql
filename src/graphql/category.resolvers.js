const boom = require("@hapi/boom");
const CategoryService = require("./../services/category.service");
const service = new CategoryService();

const addCategory = async (_, { dto }, context) => {
  const { user } = await context.authenticate("jwt", { session: false });
  if (!user) {
    throw boom.unauthorized("Inicia sesion o registrate, no tienes acceso!");
  }
  return service.create(dto);
};

module.exports = { addCategory };
