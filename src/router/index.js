const express = require("express");
const productoController = require("./../controllers/producto.controller");
const Router = express.Router();

// CRUD de productos
Router.get("/producto", productoController.listar);
Router.post("/producto", productoController.guardar);
Router.get("/producto/:id", productoController.mostrar);
Router.put("/producto/:id", productoController.modificar);
Router.delete("/producto/:id", productoController.eliminar);

// CRUD de usuarios


// CRUD de categorías


// CRUD de proveedores

module.exports = Router;
