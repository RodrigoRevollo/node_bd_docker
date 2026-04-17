const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/conexion");

const Categoria = sequelize.define(
  'Categoria',
  {
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  },
  {
    timestamps: true,
  },
);

Categoria.sync();

module.exports = Categoria;