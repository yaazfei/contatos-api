module.exports = (sequelize, Sequelize) => {
  const Contact2 = sequelize.define("contacts", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: Sequelize.STRING
    },
    celular: {
      type: Sequelize.STRING
    }
  });

  return Contact2;
};
