const Product = require('../models/product.model');

const mostrarProductos = async (req, res) => {
    try {
        const productos = await Product.find();
        res.json(productos);
    } catch (error) {
        res.json(error);
    }

}

const crearProducto = async (req, res) => {
    try {
        const productoCreado = await Product.create(req.body);
        res.json({ resultado: 'ok', nuevo_producto: productoCreado });
    } catch (error) {
        res.json(error);
    }
}

const actualizarProducto = async (req, res) => {
    try {
        const productoActualizado = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.json({ resultado: 'ok', producto: productoActualizado, parametro: req.params.id });
    } catch (error) {
        res.json(error);
    }

}

const eliminarProducto = async (req, res) => {
    try {
        const productoEliminado = await Product.deleteOne({ _id: req.params.id });
        res.json({ resultado: 'ok', productoEliminado: productoEliminado, parametro: req.params.id });
    } catch (error) {
        res.json(error);
    }
}

const buscarProducto = async (req, res) => {
    try {
        const productoBuscado = await Product.findOne({ _id: req.params.id });
        res.json({ resultado: 'ok', productoBuscado: productoBuscado, parametro: req.params.id });
    } catch (error) {
        res.json(error);
    }
    
}

module.exports = {
    mostrarProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
    buscarProducto
}