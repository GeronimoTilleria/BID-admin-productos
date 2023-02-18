import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';



const Product = () => {

    const initialValue = {
        title: '',
        price: '',
        description: ''
    }

    const { id } = useParams()
    const [producto, setProducto] = useState(initialValue);

    useEffect(() => {

        const getData = async () => {
            const respuesta = await axios.get(`http://localhost:8000/api/products/get/${id}`);
            setProducto(respuesta.data.productoBuscado);
        }

        getData();

    }, [id])

    return (
        <div className='w-25 mx-auto mt-4'>
            <h3>{producto.title}</h3>
            <p>{producto.price}</p>
            <p>{producto.description}</p>
        </div>
    )
}

export default Product;
