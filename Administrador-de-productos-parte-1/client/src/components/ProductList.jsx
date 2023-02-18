import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductList = ({ senal }) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const respuesta = await axios.get(`http://localhost:8000/api/products`);
            setProductos(respuesta.data);
        }

        getProducts();
    }, [senal])

    return (
        <div className='w-25 mx-auto'>
            <h3>Lista de Productos</h3>
            <ul>
                {
                    productos.map((producto, index) => <li key={index}><Link to={`/${producto._id}`}>{producto.title}</Link></li>)
                }
            </ul>
        </div>
    )
}

export default ProductList;