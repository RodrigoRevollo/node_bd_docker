const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/conexion");

const Proveedor = sequelize.define(
  'Proveedor',
  {
    nombre_empresa: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    contacto_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    pais_origen: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: true,
      validate: {
        isEmail: true
      }
    }
  },
  {
    timestamps: true,
  },
);

Proveedor.sync();

module.exports = Proveedor;