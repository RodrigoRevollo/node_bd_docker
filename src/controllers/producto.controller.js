const Producto = require('./../models/Producto');



async function listar(req, res) {
    try {
        const productos = await Producto.findAll(); // SELECT * FROM Producto
        return res.status(200).json(productos);

    } catch (error) {
        return res.status(500).json({ error: 'Error al listar los productos' });
    }
}

async function guardar(req, res) {
    try {
        await Producto.create(req.body); // INSERT INTO Producto (nombre, precio, stock, descripcion, imagen) VALUES (...)
        return res.status(201).json({ mensaje: 'Producto guardado correctamente' });

    } catch (error) {
        console-log(error);
        return res.status(500).json({ error: 'Error al guardar el producto' });
    }
}
async function mostrar(req, res) {
    try {
        const { id } = req.params;
        const producto = await Producto.findByPk(id);
        return res.status(200).json(producto);
        
    } catch (error) {
        console-log(error);
        return res.status(500).json({ error: 'Error al mostrar el producto' }); 
    }
}
async function modificar(req, res) {
    try {
        const { id } = req.params;
        const producto = await Producto.findByPk(id);
        await producto.update(req.body);
        return res.status(200).json();

    } catch (error) {
        return res.status(500).json({ error: 'Error al obtener los producto' });
        
    }
}
async function eliminar(req, res) {
    try {
        const { id } = req.params;
        const producto = await Producto.findByPk(id);
        producto.destroy();
        return res.status(200).json({ mensaje: 'Producto eliminado correctamente' });
        
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar el producto' });
    }
}

module.exports = {
    listar,
    guardar,
    mostrar,
    modificar,
    eliminar
}