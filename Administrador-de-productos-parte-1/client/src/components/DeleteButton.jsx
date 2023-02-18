import axios from 'axios'
import React from 'react'

const DeleteButton = ({ idProducto, productoEliminado }) => {

    const eliminarProducto = async (idProducto) => {
        await axios.delete(`http://localhost:8000/api/products/delete/${idProducto}`);
        productoEliminado(idProducto);
    }

    return (
        <button onClick={() => eliminarProducto(idProducto)}>Delete</button>
    )
}

export default DeleteButton
