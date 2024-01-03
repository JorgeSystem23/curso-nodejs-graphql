const boom = require("@hapi/boom");

async function checkJwtGql(context) {
  const { user } = await context.authenticate("jwt", { session: false });
  if (!user) {
    throw boom.unauthorized("Inicia sesion o registrate, no tienes acceso!");
  }
}

module.exports = checkJwtGql;
