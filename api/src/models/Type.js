const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("type", {
    id_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name_type: {
      type: DataTypes.STRING,
    },
  });
};
