const express = require('express');
const ProductControllers = require('../controllers/product.controller');

const app = express();


app.get('/api/products', ProductControllers.mostrarProductos);

app.post('/api/products', ProductControllers.crearProducto);

app.put('/api/products/update/:id', ProductControllers.actualizarProducto);

app.delete('/api/products/delete/:id', ProductControllers.eliminarProducto);

app.get('/api/products/get/:id', ProductControllers.buscarProducto);


module.exports = app;