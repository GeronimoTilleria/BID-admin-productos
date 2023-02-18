import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = ({ senal }) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const respuesta = await axios.get(`http://localhost:8000/api/products`);
            setProductos(respuesta.data);
        }

        getProducts();
    }, [senal])

    const productoEliminado = (idProducto) => {
        setProductos(productos.filter( p => p._id !== idProducto));
    }

    return (
        <div className='w-25 mx-auto'>
            <h3>Lista de Productos</h3>
            <ul>
                {
                    productos.map((producto, index) => <li key={index}><Link to={`/${producto._id}`}>{producto.title}</Link> | <Link to={`/update/${producto._id}`}>Update</Link> | <DeleteButton idProducto={producto._id} productoEliminado={productoEliminado}>Delete</DeleteButton></li>)
                }
            </ul>
        </div>
    )
}

export default ProductList;