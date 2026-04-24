const express = require("express");
require("dotenv").config();
const router = require("./router");
const User = require("./models/User");
const Producto = require("./models/Producto");
const Categoria = require("./models/Categoria");
const Proveedor = require("./models/Proveedor");

// inicializando una app de express
const app = express();

// datos en formato JSON
app.use(express.json());

// Crear variable para el puerto desde el archivo .env
const PORT = process.env.PORT || 3000;


app.get("/", function(req, res){
    return res.json({mensaje: "Saludos desde mi App de Node (MODIFICADO) último 3"});
});

app.use("/api", router);

app.listen(PORT, function(){
    console.log(`Servidor corriendo en el puerto ${PORT} (ultima modificación) 3`);
})